// src/app/example/page.tsx
import React from 'react';
import PeriodicTable from './PeriodicTable';
import './Page.scss';

const ExamplePage: React.FC = () => {
  return (
    <div className="page">
        <header className="header">
            <h1>Валентність</h1>
        </header>
    <div className="description">
        <p>Валентність — це здатність атомів хімічного елемента сполучатись (утворювати хімічні зв'язки) з певним числом інших атомів.</p>
    </div>
        <main className="main-container">
            <PeriodicTable/>
        </main>
    </div>
  );
};

export default ExamplePage;
