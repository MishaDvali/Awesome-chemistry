import React from 'react';

const ElementInfo = ({ selectedElement, position }) => {
  if (!selectedElement) return null;

  return (
    <div
      className="element-info"
      style={{
        left: `${position.x}px`,
        top: `${position.y - 90}px`,
        transform: 'translateX(-50%)',
      }}
    >
      <p>Елемент: {selectedElement.symbol}</p>
      <p>період: {selectedElement.period}</p>
      <p>Стала валентність: {selectedElement.valence}</p>
      <p>Молярная маса: {selectedElement.atomicMass}</p>
      <p>Номер: {selectedElement.atomicNumber}</p>
    </div>
  );
};

export default ElementInfo;
