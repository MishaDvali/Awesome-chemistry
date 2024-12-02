"use client"
import "./Page.scss";
import MoleculeNode from "@/app/utils/Molecules/Node";
import SolveValence from "@/app/utils/Valence/SolveValence";
import React, { useState } from "react";

const Excersise_5: React.FC = (props) => {
	const molecules = [["Na2O","Na2O", 1, 2],
	["CaCl", "CaCl2", 2, 1],["AlCl", "Al2O3", 3, 2], ["KCl", "KCl", 1, 1], ["Al3S2", "Al2S3", 3, 2], ["CaO", "CaO", 2, 2], ["Na3N", "Na3N", 1, 3], ["AlCl3", "AlCl3", 3, 1], ["BaS", "BaS", 2, 2], ["MgO", "MgO", 2, 2]


	]
  const [clickedMolecule, setClickedMolecule] = useState<object>({});

	 const handleClick = (molecule: string) => {
    setClickedMolecule((prev) => ({
      ...prev,
      [molecule]: !prev[molecule], // Toggle the state for the clicked molecule
    }));
  };

  return (
		 <div className="description" style={{ display: "inline", gap: "20px" }}>
		 <h3>Складіть формули та зазначте валентність елементів в них. Натисніть на елементи, щоб перевірити себе<br/></h3>
      {molecules.map((molecule_info, index) => (
        <div key={index} style={{ display: "inline-block", margin: "10px" }}>
          {/* Conditionally render the molecule based on its clicked state */}
          {!clickedMolecule[molecule_info[0]] && (
            <div
              onClick={() => handleClick(molecule_info[0])}
              style={{ cursor: "pointer", display: "inline-block" }}
            >
              <MoleculeNode molecule_formula={molecule_info[0]} />
            </div>
          )}
          {clickedMolecule[molecule_info[0]] && (
            <div style={{ display: "inline-block" }}>
              <MoleculeNode
                molecule_formula={molecule_info[1]}
                showValence={true}
                valences={[molecule_info[2], molecule_info[3]]}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Excersise_5;

