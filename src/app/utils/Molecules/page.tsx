import {} from "./Molecule"
import React from 'react';
import MoleculeClass from "./Node";

const ExamplePage: React.FC = () => {
  return <MoleculeClass molecule_formula={"O4H8"} showValence={true}></MoleculeClass>;
}
export default ExamplePage;
