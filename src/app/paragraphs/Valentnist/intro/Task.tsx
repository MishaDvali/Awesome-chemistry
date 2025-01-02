import React from 'react';
import MoleculeNode from '@/app/utils/Molecules/Node';

const Task = ({ questions, handleAnswer, answers }) => {
  return (
    <div className="task">
      <h3>Експрес-тест</h3>
      {questions && questions.map((question, index) => (
        <div key={index} className="question">
          <p>{index + 1}. {question.text}</p>
          {question.options && question.options.map((option, idx) => (
            <div key={idx} className="molecule-answer">
              <p onClick={() => handleAnswer(index + 1, option.value)} className={answers[index + 1] === option.value ? (answers[index + 1] === question.correct ? 'correct' : 'incorrect') : ''}>
                {String.fromCharCode(65 + idx)}) {option.label}
              </p>
              {answers[index + 1] && (
                <div className="answer">
                  <p className={answers[index + 1] === question.correct ? 'correct' : 'incorrect'}>
                    {answers[index + 1] === question.correct ? 'Правильно' : 'Неправильно'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Task;
