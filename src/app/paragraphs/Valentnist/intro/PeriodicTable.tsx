"use client";

import React, { useState } from 'react';
import './PeriodicTable.scss';
import { elements, compounds, errors } from './data';
import MoleculeNode from '@/app/utils/Molecules/Node';

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
    <div className="theory">
      <h3>Теоретичний матеріал</h3>
      <p>При утворенні молекул атоми з'єднуються не безладно, а в певній послідовності особливими хімічними зв'язками. Кожний атом може утворити не нескінченне, а тільки певне число таких зв'язків. У XIX столітті вчені встановили, що атоми різних елементів мають різну здатність приєднувати до себе інші атоми. Так, наприклад, було помічено, що атом Гідрогену може приєднати тільки один атом іншого хімічного елемента (HCl, HF, NaH), атом Оксигену — два атоми Гідрогену (H₂O), атом Нітрогену — три атоми Гідрогену (NH₃). Ця властивість атомів була названа валентністю.</p>
      <p>Валентність — це число зв'язків, які певний атом може утворити з іншими атомами.</p>
      <p>Щоб показати, як атоми сполучені в молекулі, використовують графічні (структурні) формули. Вони показують не тільки число атомів у молекулі, але й послідовність їх сполучення. Графічна формула молекули води H₂O записується так:</p>
      <p>H — O — H</p>
      <p>Валентність дорівнює числу зв'язків, які атом даного елемента утворює в молекулі. В графічних формулах зв'язки зображують лініями, тому валентність дорівнює числу ліній у графічній формулі. Деякі елементи виявляють у всіх своїх сполуках постійну валентність (наприклад, Гідроген завжди одновалентний, Оксиген — двовалентний), інші — змінну валентність. Визначити валентність можна з хімічної формули, виходячи з того, що сума валентностей усіх атомів одного елемента в сполуці дорівнює сумі валентностей усіх атомів іншого елемента в цій сполуці.</p>
      <h3>Таблиця 1. Визначення валентності за Періодичною системою</h3>
      <table>
        <thead>
          <tr>
            <th>Група Періодичної системи</th>
            <th>I</th>
            <th>II</th>
            <th>III</th>
            <th>IV</th>
            <th>V</th>
            <th>VI</th>
            <th>VII</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Вища валентність</td>
            <td>I</td>
            <td>II</td>
            <td>III</td>
            <td>IV</td>
            <td>V</td>
            <td>VI</td>
            <td>VII</td>
          </tr>
          <tr>
            <td>Можливі валентності</td>
            <td>I</td>
            <td>II</td>
            <td>III</td>
            <td>II, IV</td>
            <td>III, V</td>
            <td>II, IV, VI</td>
            <td>I, III, V, VII</td>
          </tr>
        </tbody>
      </table>
      <h3>Таблиця 2. Алгоритм складання формул бінарних сполук</h3>
      <table>
        <thead>
          <tr>
            <th>Порядок дій</th>
            <th>Приклади обчислень</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Записуємо символи елементів у необхідному порядку та позначаємо їхню валентність</td>
            <td>III Al II O</td>
            <td>VI S I F</td>
            <td>IV C II S</td>
          </tr>
          <tr>
            <td>2. Знаходимо найменше спільне кратне (НСK) для значень валентностей елементів</td>
            <td>НСK (III і II) = 6</td>
            <td>НСK (VI і I) = 6</td>
            <td>НСK (IV і II) = 4</td>
          </tr>
          <tr>
            <td>3. Число атомів певного елемента дорівнює відношенню НСК до валентності цього елемента</td>
            <td>6 : III = 2 (Al) 6 : II = 3 (O)</td>
            <td>6 : VI = 1 (S) 6 : I = 6 (F)</td>
            <td>4 : IV = 1 (C) 4 : II = 2 (S)</td>
          </tr>
          <tr>
            <td>4. Записуємо отримані індекси після символів елементів</td>
            <td>III II Al₂O₃</td>
            <td>VI I SF₆</td>
            <td>IV II CS₂</td>
          </tr>
        </tbody>
      </table>
    </div>
      <div className="legend">
        <p className="group-1">Група Ia, має сталу валентність 1</p>
        <p className="group-2">Група IIa, має сталу валентність 2</p>
        <p className="group-3">Група IIIa, має сталу валентність 3</p>
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
        <h3>Визначіть валентність елементів у бінарних сполуках:</h3>
        {compounds && compounds.map((compound, index) => (
          <div key={index} className="compound-task">
            <p onClick={() => handleCompoundClick(compound)}>
              <MoleculeNode molecule_formula={compound.formula}/>
            </p>
            {selectedCompound && selectedCompound.formula === compound.formula && (
              <p className="answer">Відповідь: {selectedCompound.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="task">
        <h3>Знайди помилку і виправ:</h3>
        {errors && errors.map((error, index) => (
          <div key={index} className="error-task">
            <p onClick={() => handleErrorClick(error)}>
              <MoleculeNode molecule_formula={error.formula}></MoleculeNode>
            </p>
            {selectedError && selectedError.formula === error.formula && (
              <div className="answer">
                Відповідь: <MoleculeNode molecule_formula={selectedError.answer}></MoleculeNode>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="task">
        <h3>Експрес-тест</h3>
        <div className="question">
          <p>1. Вкажіть неправильно складену формулу:</p>
          <p onClick={() => handleAnswer(1, 'A')} className={answers[1] === 'A' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>A) MgO</p>
          <p onClick={() => handleAnswer(1, 'Б')} className={answers[1] === 'Б' ? 'correct' : ''}>Б) KO</p>
          <p onClick={() => handleAnswer(1, 'B')} className={answers[1] === 'B' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>B) ZnO</p>
          <p onClick={() => handleAnswer(1, 'Г')} className={answers[1] === 'Г' ? (answers[1] === 'Б' ? 'correct' : 'incorrect') : ''}>Г) <MoleculeNode molecule_formula='Al2O3'></MoleculeNode></p>
          {answers[1] && <p className={answers[1] === 'Б' ? 'correct' : 'incorrect'}>{answers[1] === 'Б' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>2. В якій сполуці валентність Хрому найвища?</p>
          <p onClick={() => handleAnswer(2, 'А')} className={answers[2] === 'А' ? (answers[2] === 'B' ? 'correct' : 'incorrect') : ''}>А) <MoleculeNode molecule_formula='Cr2O3'></MoleculeNode></p>
          <p onClick={() => handleAnswer(2, 'Б')} className={answers[2] === 'Б' ? (answers[2] === 'B' ? 'correct' : 'incorrect') : ''}>Б) <MoleculeNode molecule_formula='CrO'></MoleculeNode></p>
          <p onClick={() => handleAnswer(2, 'B')} className={answers[2] === 'B' ? 'correct' : ''}>B) <MoleculeNode molecule_formula='CrO3'></MoleculeNode></p>
          {answers[2] && <p className={answers[2] === 'B' ? 'correct' : 'incorrect'}>{answers[2] === 'B' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>3. Вкажіть групу, в якій усі метали можуть виявляти у сполуках валентність III:</p>
          <p onClick={() => handleAnswer(3, 'A')} className={answers[3] === 'A' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>A) Mg, Fe, Zn</p>
          <p onClick={() => handleAnswer(3, 'Б')} className={answers[3] === 'Б' ? 'correct' : ''}>Б) Al, Fe, Cr</p>
          <p onClick={() => handleAnswer(3, 'B')} className={answers[3] === 'B' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>B) Cr, K, Al</p>
          <p onClick={() => handleAnswer(3, 'Г')} className={answers[3] === 'Г' ? (answers[3] === 'Б' ? 'correct' : 'incorrect') : ''}>Г) Al, Na, Zn</p>
          {answers[3] && <p className={answers[3] === 'Б' ? 'correct' : 'incorrect'}>{answers[3] === 'Б' ? 'Правильно' : 'Неправильно'}</p>}
        </div>
        <div className="question">
          <p>4. Вкажіть групу, яка містить лише одновалентні хімічні елементи:</p>
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
