"use client";
import React, { useState } from 'react';
import PeriodicTable from './PeriodicTable';
import './Page.scss';

const ChemicalTable: React.FC = ({}) => {
	const data = [
		["O", -2, "оксид", "BaO", "барій оксид"],
		["S", -2, "сульфід", "CaS", "калій сульфід"],
		["F", -1, "фторид", "FeF3", "ферум три фторид"],
		["Cl", -1, "хлорид", "SrCl2", "стронцій хлорид"],
		["Br", -1, "бромід", "CuBr2", "купрум два бромід"],
		["I", -1, "йодид", "NaI", "натрій йодид"],
		["N", -3, "нітрид", "K3N", "калій нітрид"],
		["P", -3, "фосфіл", "Mg3P2", "магній фосфіл"],
		["C", -4, "карбід", "*CaC2", "калій карбід"],
		["Si", -4, "силіцид", "Mg2Si", "магній силіцид"],
		["H", -1, "гідрид", "LiH", "літій гідрид"],
	]
	const [clicked, setClicked] = useState({})
	const handleclick = (element) => {
		setClicked((prev)=>element)
	}
  return (<div className="description">
    <table style={{ borderCollapse: "collapse", borderWidth:"4px", borderColor: "black", width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Символ неметалу</th>
          <th >Валентість/Розряд</th>
          <th >Назва залишку</th>
          <th >Приклад речовини</th>
          <th >Назва речовини</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={()=>{handleclick(index)}}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} >
                {(cellIndex != 4 || clicked == index) && cell}
								{!(cellIndex != 4 || clicked == index) && <button onClick={()=>{handleclick(index)}}>Перевір себе!</button>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
		</div>
  );
};


export default ChemicalTable ;
