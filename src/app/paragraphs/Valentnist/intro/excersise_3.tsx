"use client";
import React, { useState } from "react";
import "./Page.scss";
import MoleculeNode from "@/app/utils/Molecules/Node";
import SolveValence from "@/app/utils/Valence/SolveValence";

const Excersise_3: React.FC = () => {
  const correctAnswer = "OsO4";
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleClick = (molecule: string) => {
    setSelectedAnswer(molecule);
    setIsCorrect(molecule === correctAnswer);
    setShowSolution(true);
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
            onClick={() => handleClick(molecule)}>
            <MoleculeNode molecule_formula={molecule} showValence={false} />
          </div>
        ))}
      </div>
      {showSolution && (
        <div className="solution">
          <h3>{isCorrect ? "Правильно" : "Неправильно!"}</h3>
          <SolveValence key={selectedAnswer} molecule_formula={selectedAnswer || "Натисніть на формулу щоб перевірити себе!"} />
        </div>
      )}
    </div>
  );
};

export default Excersise_3;

