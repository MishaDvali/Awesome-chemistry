"use client";
import React, { useState } from "react";
import "./Page.scss";
import MoleculeNode from "@/app/utils/Molecules/Node";
import SolveValence from "@/app/utils/Valence/SolveValence";


const Excersise_3: React.FC = () => {
  const correctAnswerA = "OsO4";
  const [selectedAnswerA, setSelectedAnswerA] = useState<string | null>(null);
  const [showSolutionA, setShowSolutionA] = useState<boolean>(false);
  const [isCorrectA, setIsCorrectA] = useState<boolean | null>(null);

  const handleClickA = (molecule: string) => {
    setSelectedAnswerA(molecule);
    setIsCorrectA(molecule === correctAnswerA);
    setShowSolutionA(true);
  };

  const correctAnswerB = "KCl";
  const [selectedAnswerB, setSelectedAnswerB] = useState<string | null>(null);
  const [showSolutionB, setShowSolutionB] = useState<boolean>(false);
  const [isCorrectB, setIsCorrectB] = useState<boolean | null>(null);

  const handleClickB = (molecule: string) => {
    setSelectedAnswerB(molecule);
    setIsCorrectB(molecule === correctAnswerB);
    setShowSolutionB(true);
  };

  return (
    <div className="description">
      Натисніть на формулу речовини, де елемент:
      <br />
      A) З найбільшою валентністю:
      <br />
      <div className="molecules">
        {["Al2O3", "WO3", "CaCl2", "OsO4", "PCl5"].map((molecule) => (
          <div
            key={molecule}
            className="molecule-wrapper"
            onClick={() => handleClickA(molecule)}>
            <MoleculeNode molecule_formula={molecule} showValence={false} />
          </div>
        ))}
      </div>
      {showSolutionA && (
        <div className="solution">
          <h3>{isCorrectA ? "Правильно" : "Неправильно!"}</h3>
					{selectedAnswerA!="Al2O3" && <SolveValence key={selectedAnswerA} molecule_formula={selectedAnswerA || "Натисніть на формулу щоб перевірити себе!"} />}
					{selectedAnswerA=="Al2O3" && <MoleculeNode molecule_formula={selectedAnswerA} showValence={true}/>}
          
        </div>
      )}
			<br/>

			Б) З найменшою валентністю:<br/>
			<div className="molecules">
        {["CaO", "KCl", "Mg3N2", "PbCl2", "BaS"].map((molecule) => (
          <div
            key={molecule}
            className="molecule-wrapper"
            onClick={() => handleClickB(molecule)}>
            <MoleculeNode molecule_formula={molecule} showValence={false} />
          </div>
        ))}
      </div>
      {showSolutionB && (
        <div className="solution">
          <h3>{isCorrectB ? "Правильно" : "Неправильно!"}</h3>
					{selectedAnswerB!="CaO" && selectedAnswerB!="PbCl2" && <SolveValence key={selectedAnswerB} molecule_formula={selectedAnswerB || "Натисніть на формулу щоб перевірити себе!"} />}
        </div>
      )}

			
    </div>
		//lets do the same with CaO KCl Mg3N2 PbCl2 BaS
		// the right answer is KCl
  );
};

export default Excersise_3;

