import React from 'react';
import ElementNode from './Node'

const ExamplePage: React.FC = () => {
  return <><ElementNode element="H" subScript={2} valence={4} subscript_style={{color: "#ff0000"}} valence_style={{color: "#00ff00"}}/></>
}
export default ExamplePage;
