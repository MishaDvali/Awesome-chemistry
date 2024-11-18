"use client";

import React, { useState } from 'react';
import './PeriodicTable.scss';
import { elements, compounds, errors } from './data';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedCompound, setSelectedCompound] = useState(null);
  const [selectedError, setSelectedError] = useState(null);

  const handleClick = (element, event) => {
    if (selectedElement && selectedElement.symbol === element.symbol) {
      setSelectedElement(null); // Закрываем контейнер при повторном нажатии на тот же элемент
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

  const lightUp = (color, condition) => (condition ? { backgroundColor: color } : {});

  return (
    <div className="periodic-table">
      <div className="legend">
        <p className="group-1">Група Ia, має сталу валентність 1</p>
        <p className="group-2">Група IIa, має сталу валентність 2</p>
        <p className="group-3">Група IIIa, має сталу валентність 3</p>
      </div>
      <div className="table">
        {elements.map((element, index) => (
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
          <p>Період: {selectedElement.period}</p>
          <p>Стала валентність: {selectedElement.valence}</p>
          <p>Молярная маса: {selectedElement.atomicMass}</p>
          <p>Номер: {selectedElement.atomicNumber}</p>
        </div>
      )}
      <div className="task">
        <h3>Визначіть валентність елементів у бінарних сполуках:</h3>
        {compounds.map((compound, index) => (
          <p key={index} onClick={() => handleCompoundClick(compound)}>
            {compound.formula}
          </p>
        ))}
        {selectedCompound && <p>Відповідь: {selectedCompound.answer}</p>}
      </div>
      <div className="task">
        <h3>Знайди помилку і виправ:</h3>
        {errors.map((error, index) => (
          <p key={index} onClick={() => handleErrorClick(error)}>
            {error.formula}
          </p>
        ))}
        {selectedError && <p>Відповідь: {selectedError.answer}</p>}
      </div>
    </div>
  );
};

export default PeriodicTable;
