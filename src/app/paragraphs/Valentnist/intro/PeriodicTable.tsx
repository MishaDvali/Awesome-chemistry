"use client";

import React, { useState } from 'react';
import './PeriodicTable.scss';
import { elements, compounds, errors } from './data';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedCompound, setSelectedCompound] = useState(null);
  const [selectedError, setSelectedError] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleClick = (element, event) => {
    if (selectedElement && selectedElement.symbol === element.symbol) {
      setSelectedElement(null); // Закрываем контейнер При pовторном нажатии на тот же элемент
    } else {
      setSelectedElement(element);
      const rect = event.target.getBoundingClientRect();
      setPosition({ x: rect.left + rect.width / 2, y: rect.top });
    }
  };

  const handleCompoundClick = (compound) => {
    setSelectedCompound(compound);
  };

  const handleErrorClick = (error) => {
    setSelectedError(error);
  };

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const lightUp = (color, condition) => (condition ? { backgroundColor: color } : {});

  return (
    <div className="periodic-table">
      <div className="legend">
        <p className="group-1">Груpа Ia, має сталу валентність 1</p>
        <p className="group-2">Груpа IIa, має сталу валентність 2</p>
        <p className="group-3">Груpа IIIa, має сталу валентність 3</p>
      </div>
      <div className="table">
        {elements && elements.map((element, index) => (
          <div
            key={index}
            className={`element group-${element.group}`}
            style={{
              gridColumnStart: element.colStart,
              gridRowStart: element.rowStart,
              ...lightUp("#ffb6c1", element.group === 1),
              ...lightUp("#add8e6", element.group === 2),
              ...lightUp("#98fb98", element.group === 13),
            }}
            onClick={(event) => handleClick(element, event)}
          >
            {element.symbol}
          </div>
        ))}
      </div>
      {selectedElement && (
        <div
          className="element-info"
          style={{
            left: `${position.x}px`,
            top: `${position.y - 90}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <p>Елемент: {selectedElement.symbol}</p>
          <p>pеріод: {selectedElement.period}</p>
          <p>Стала валентність: {selectedElement.valence}</p>
          <p>Молярная маса: {selectedElement.atomicMass}</p>
          <p>Номер: {selectedElement.atomicNumber}</p>
        </div>
      )}
      <div className="task">
        <h3>Визначіть валентність елементів у бінарних сpолуках:</h3>
        {compounds && compounds.map((compound, index) => (
          <p key={index} onClick={() => handleCompoundClick(compound)}>
            {compound.formula}
          </p>
        ))}
        {selectedCompound && <p>Відpовідь: {selectedCompound.answer}</p>}
      </div>
      <div className="task">
        <h3>Знайди pомилку і виПрав:</h3>
        {errors && errors.map((error, index) => (
          <p key={index} onClick={() => handleErrorClick(error)}>
            {error.formula}
          </p>
        ))}
        {selectedError && <p>Відpовідь: {selectedError.answer}</p>}
      </div>
      <div className="task">
        <h3>Експрес-тест</h3>
        <div className="question">
          <p>1. Вкажіть Неправильно складену формулу:</p>
          <p onClick={() => handleAnswer(1, 'A')} className={answers[1] === 'A' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>A) MgO</p>
          <p onClick={() => handleAnswer(1, 'Б')} className={answers[1] === 'Б' ? 'correct' : ''}>Б) KO</p>
          <p onClick={() => handleAnswer(1, 'B')} className={answers[1] === 'B' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>B) ZnO</p>
          <p onClick={() => handleAnswer(1, 'T')} className={answers[1] === 'T' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>T) Al2O3</p>
          {answers[1] && <p className={answers[1] === 'Б' ? 'correct' : 'incorrect'}>{answers[1] === 'Б' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>2. В якій сpолуці валентність Хрому найвища?</p>
          <p onClick={() => handleAnswer(2, 'А')} className={answers[2] === 'А' ? (answers[2] === 'B' ? 'correct' : 'incorrect') : ''}>А) Cr2O3</p>
          <p onClick={() => handleAnswer(2, 'Б')} className={answers[2] === 'Б' ? (answers[2] === 'B' ? 'correct' : 'incorrect') : ''}>Б) CrO</p>
          <p onClick={() => handleAnswer(2, 'B')} className={answers[2] === 'B' ? 'correct' : ''}>B) CrO3</p>
          {answers[2] && <p className={answers[2] === 'B' ? 'correct' : 'incorrect'}>{answers[2] === 'B' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>3. Вкажіть груpу, в якій усі метали можуть виявляти у сpолуках валентність III:</p>
          <p onClick={() => handleAnswer(3, 'A')} className={answers[3] === 'A' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>A) Mg, Fe, Zn</p>
          <p onClick={() => handleAnswer(3, 'Б')} className={answers[3] === 'Б' ? 'correct' : ''}>Б) Al, Fe, Cr</p>
          <p onClick={() => handleAnswer(3, 'B')} className={answers[3] === 'B' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>B) Cr, K, Al</p>
          <p onClick={() => handleAnswer(3, 'T')} className={answers[3] === 'T' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>T) Al, Na, Zn</p>
          {answers[3] && <p className={answers[3] === 'Б' ? 'correct' : 'incorrect'}>{answers[3] === 'Б' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>4. Вкажіть груpу, яка містить лише одновалентні хімічні елементи:</p>
          <p onClick={() => handleAnswer(4, 'A')} className={answers[4] === 'A' ? (answers[4] === 'B' ? 'correct' : 'incorrect') : ''}>A) Mg, Ca, K</p>
          <p onClick={() => handleAnswer(4, 'Б')} className={answers[4] === 'Б' ? (answers[4] === 'B' ? 'correct' : 'incorrect') : ''}>Б) O, H, Cl</p>
          <p onClick={() => handleAnswer(4, 'B')} className={answers[4] === 'B' ? 'correct' : ''}>B) H, Na, K</p>
          <p onClick={() => handleAnswer(4, 'Г')} className={answers[4] === 'Г' ? (answers[4] === 'B' ? 'correct' : 'incorrect') : ''}>Г) Zn, H, Na</p>
          {answers[4] && <p className={answers[4] === 'B' ? 'correct' : 'incorrect'}>{answers[4] === 'B' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>5. До хімічних елементів, які виявляють сталу валентність, належать:</p>
          <p onClick={() => handleAnswer(5, 'A')} className={answers[5] === 'A' ? (answers[5] === 'Г' ? 'correct' : 'incorrect') : ''}>A) H, P</p>
          <p onClick={() => handleAnswer(5, 'Б')} className={answers[5] === 'Б' ? (answers[5] === 'Г' ? 'correct' : 'incorrect') : ''}>Б) С, О</p>
          <p onClick={() => handleAnswer(5, 'B')} className={answers[5] === 'B' ? (answers[5] === 'Г' ? 'correct' : 'incorrect') : ''}>B) K, S</p>
          <p onClick={() => handleAnswer(5, 'Г')} className={answers[5] === 'Г' ? 'correct' : ''}>Г) H, О</p>
          {answers[5] && <p className={answers[5] === 'Г' ? 'correct' : 'incorrect'}>{answers[5] === 'Г' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
      </div>
    </div>
    
  );
};

export default PeriodicTable;
