import React from 'react';
import './PeriodicTable.scss';

const elements = [
          { symbol: 'H', group: 1, colStart: 1, rowStart: 1 },
          { symbol: 'He', group: 18, colStart: 18, rowStart: 1 },
          { symbol: 'Li', group: 1, colStart: 1, rowStart: 2 },
          { symbol: 'Be', group: 2, colStart: 2, rowStart: 2 },
          { symbol: 'B', group: 13, colStart: 13, rowStart: 2 },
          { symbol: 'C', group: 14, colStart: 14, rowStart: 2 }, 
          { symbol: 'N', group: 15, colStart: 15, rowStart: 2 }, 
          { symbol: 'O', group: 16, colStart: 16, rowStart: 2 }, 
          { symbol: 'F', group: 17, colStart: 17, rowStart: 2 }, 
          { symbol: 'Ne', group: 18, colStart: 18, rowStart: 2 },
          { symbol: 'Na', group: 1, colStart: 1, rowStart: 3 }, 
          { symbol: 'Mg', group: 2, colStart: 2, rowStart: 3 }, 
          { symbol: 'Al', group: 13, colStart: 13, rowStart: 3 }, 
          { symbol: 'Si', group: 14, colStart: 14, rowStart: 3 }, 
          { symbol: 'P', group: 15, colStart: 15, rowStart: 3 }, 
          { symbol: 'S', group: 16, colStart: 16, rowStart: 3 }, 
          { symbol: 'Cl', group: 17, colStart: 17, rowStart: 3 },
          { symbol: 'Ar', group: 18, colStart: 18, rowStart: 3 },
          { symbol: 'K', group: 1, colStart: 1, rowStart: 4 }, 
          { symbol: 'Ca', group: 2, colStart: 2, rowStart: 4 }, 
          { symbol: 'Sc', group: 3, colStart: 3, rowStart: 4 }, 
          { symbol: 'Ti', group: 4, colStart: 4, rowStart: 4 }, 
          { symbol: 'V', group: 5, colStart: 5, rowStart: 4 }, 
          { symbol: 'Cr', group: 6, colStart: 6, rowStart: 4 }, 
          { symbol: 'Mn', group: 7, colStart: 7, rowStart: 4 }, 
          { symbol: 'Fe', group: 8, colStart: 8, rowStart: 4 }, 
          { symbol: 'Co', group: 9, colStart: 9, rowStart: 4 }, 
          { symbol: 'Ni', group: 10, colStart: 10, rowStart: 4 }, 
          { symbol: 'Cu', group: 11, colStart: 11, rowStart: 4 }, 
          { symbol: 'Zn', group: 12, colStart: 12, rowStart: 4 }, 
          { symbol: 'Ga', group: 13, colStart: 13, rowStart: 4 }, 
          { symbol: 'Ge', group: 14, colStart: 14, rowStart: 4 }, 
          { symbol: 'As', group: 15, colStart: 15, rowStart: 4 }, 
          { symbol: 'Se', group: 16, colStart: 16, rowStart: 4 }, 
          { symbol: 'Br', group: 17, colStart: 17, rowStart: 4 }, 
          { symbol: 'Kr', group: 18, colStart: 18, rowStart: 4 }, 
          { symbol: 'Rb', group: 1, colStart: 1, rowStart: 5 }, 
          { symbol: 'Sr', group: 2, colStart: 2, rowStart: 5 }, 
          { symbol: 'Y', group: 3, colStart: 3, rowStart: 5 }, 
          { symbol: 'Zr', group: 4, colStart: 4, rowStart: 5 },
          { symbol: 'Nb', group: 5, colStart: 5, rowStart: 5 },
          { symbol: 'Mo', group: 6, colStart: 6, rowStart: 5 },
          { symbol: 'Tc', group: 7, colStart: 7, rowStart: 5 },
          { symbol: 'Ru', group: 8, colStart: 8, rowStart: 5 },
          { symbol: 'Rh', group: 9, colStart: 9, rowStart: 5 },
          { symbol: 'Pd', group: 10, colStart: 10, rowStart: 5 }, 
          { symbol: 'Ag', group: 11, colStart: 11, rowStart: 5 }, 
          { symbol: 'Cd', group: 12, colStart: 12, rowStart: 5 }, 
          { symbol: 'In', group: 13, colStart: 13, rowStart: 5 }, 
          { symbol: 'Sn', group: 14, colStart: 14, rowStart: 5 }, 
          { symbol: 'Sb', group: 15, colStart: 15, rowStart: 5 }, 
          { symbol: 'Te', group: 16, colStart: 16, rowStart: 5 }, 
          { symbol: 'I', group: 17, colStart: 17, rowStart: 5 },
          { symbol: 'Xe', group: 18, colStart: 18, rowStart: 5 }, 
          { symbol: 'Cs', group: 1, colStart: 1, rowStart: 6 }, 
          { symbol: 'Ba', group: 2, colStart: 2, rowStart: 6 }, 
          { symbol: 'La', group: 3, colStart: 3, rowStart: 6 }, 
          { symbol: 'Hf', group: 4, colStart: 4, rowStart: 6 }, 
          { symbol: 'Ta', group: 5, colStart: 5, rowStart: 6 }, 
          { symbol: 'W', group: 6, colStart: 6, rowStart: 6 }, 
          { symbol: 'Re', group: 7, colStart: 7, rowStart: 6 }, 
          { symbol: 'Os', group: 8, colStart: 8, rowStart: 6 }, 
          { symbol: 'Ir', group: 9, colStart: 9, rowStart: 6 }, 
          { symbol: 'Pt', group: 10, colStart: 10, rowStart: 6 }, 
          { symbol: 'Au', group: 11, colStart: 11, rowStart: 6 }, 
          { symbol: 'Hg', group: 12, colStart: 12, rowStart: 6 }, 
          { symbol: 'Tl', group: 13, colStart: 13, rowStart: 6 }, 
          { symbol: 'Pb', group: 14, colStart: 14, rowStart: 6 }, 
          { symbol: 'Bi', group: 15, colStart: 15, rowStart: 6 }, 
          { symbol: 'Po', group: 16, colStart: 16, rowStart: 6 }, 
          { symbol: 'At', group: 17, colStart: 17, rowStart: 6 }, 
          { symbol: 'Rn', group: 18, colStart: 18, rowStart: 6 }, 
          { symbol: 'Fr', group: 1, colStart: 1, rowStart: 7 }, 
          { symbol: 'Ra', group: 2, colStart: 2, rowStart: 7 }, 
          { symbol: 'Ac', group: 3, colStart: 3, rowStart: 7 },  
          { symbol: 'Rf', group: 4, colStart: 4, rowStart: 7 }, 
          { symbol: 'Db', group: 5, colStart: 5, rowStart: 7 }, 
          { symbol: 'Sg', group: 6, colStart: 6, rowStart: 7 }, 
          { symbol: 'Bh', group: 7, colStart: 7, rowStart: 7 }, 
          { symbol: 'Hs', group: 8, colStart: 8, rowStart: 7 }, 
          { symbol: 'Mt', group: 9, colStart: 9, rowStart: 7 }, 
          { symbol: 'Ds', group: 10, colStart: 10, rowStart: 7 }, 
          { symbol: 'Rg', group: 11, colStart: 11, rowStart: 7 }, 
          { symbol: 'Cn', group: 12, colStart: 12, rowStart: 7 }, 
          { symbol: 'Nh', group: 13, colStart: 13, rowStart: 7 }, 
          { symbol: 'Fl', group: 14, colStart: 14, rowStart: 7 }, 
          { symbol: 'Mc', group: 15, colStart: 15, rowStart: 7 }, 
          { symbol: 'Lv', group: 16, colStart: 16, rowStart: 7 }, 
          { symbol: 'Ts', group: 17, colStart: 17, rowStart: 7 }, 
          { symbol: 'Og', group: 18, colStart: 18, rowStart: 7 },
];

const PeriodicTable = () => {
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
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;
