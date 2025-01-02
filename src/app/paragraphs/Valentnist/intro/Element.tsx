import React from 'react';

const Element = ({ element, handleClick, lightUp }) => {
  return (
    <div
      className={`element group-${element.group}`}
      style={{
        gridColumnStart: element.colStart,
        gridRowStart: element.rowStart,
        ...lightUp("#ffb6c1", element.group === 1),
        ...lightUp("#add8e6", element.group === 2),
        ...lightUp("#98fb98", element.group === 13),
      }}
      onClick={handleClick}
    >
      {element.symbol}
    </div>
  );
};

export default Element;
