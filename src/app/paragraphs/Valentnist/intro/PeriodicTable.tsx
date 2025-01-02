"use client";

import React, { useState } from 'react';
import './PeriodicTable.scss';
import { elements, compounds, errors, questions } from './data';
import Element from './Element';
import Legend from './Legend';
import ElementInfo from './ElementInfo';
import Task from './Task';
import MoleculeNode from '@/app/utils/Molecules/Node';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedCompound, setSelectedCompound] = useState(null);
  const [selectedError, setSelectedError] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleClick = (element, event) => {
    if (selectedElement && selectedElement.symbol === element.symbol) {
      setSelectedElement(null); // Закриваємо контейнер при повторному натисканні на той самий елемент
    } else {
      setSelectedElement(element);
      const rect = event.target.getBoundingClientRect();
      setPosition({ x: rect.left + rect.width / 2, y: rect.top });
    }
  };

  const handleCompoundClick = (compound) => {
    setSelectedCompound(compound);
  };

  const handleErrorClick = (error) => {
    setSelectedError(error);
  };

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const lightUp = (color, condition) => (condition ? { backgroundColor: color } : {});

  return (
    <div className="periodic-table">
      <Legend />
      <div className="theory">
        <h3>Теоретичний матеріал</h3>
        <p>При утворенні молекул атоми з'єднуються не безладно, а в певній послідовності особливими хімічними зв'язками. Кожний атом може утворити не нескінченне, а тільки певне число таких зв'язків. У XIX столітті вчені встановили, що атоми різних елементів мають різну здатність приєднувати до себе інші атоми. Так, наприклад, було помічено, що атом Гідрогену може приєднати тільки один атом іншого хімічного елемента (HCl, HF, NaH), атом Оксигену — два атоми Гідрогену (H₂O), атом Нітрогену — три атоми Гідрогену (NH₃). Ця властивість атомів була названа валентністю.</p>
        <p>Валентність — це число зв'язків, які певний атом може утворити з іншими атомами.</p>
        <p>Щоб показати, як атоми сполучені в молекулі, використовують графічні (структурні) формули. Вони показують не тільки число атомів у молекулі, але й послідовність їх сполучення. Графічна формула молекули води H₂O записується так:</p>
        <p>H — O — H</p>
        <p>Валентність дорівнює числу зв'язків, які атом даного елемента утворює в молекулі. В графічних формулах зв'язки зображують лініями, тому валентність дорівнює числу ліній у графічній формулі. Деякі елементи виявляють у всіх своїх сполуках постійну валентність (наприклад, Гідроген завжди одновалентний, Оксиген — двовалентний), інші — змінну валентність. Визначити валентність можна з хімічної формули, виходячи з того, що сума валентностей усіх атомів одного елемента в сполуці дорівнює сумі валентностей усіх атомів іншого елемента в цій сполуці.</p>
        <h3>Таблиця 4. Визначення валентності за Періодичною системою</h3>
        <table>
          <thead>
            <tr>
              <th>Група Періодичної системи</th>
              <th>I</th>
              <th>II</th>
              <th>III</th>
              <th>IV</th>
              <th>V</th>
              <th>VI</th>
              <th>VII</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вища валентність</td>
              <td>I</td>
              <td>II</td>
              <td>III</td>
              <td>IV</td>
              <td>V</td>
              <td>VI</td>
              <td>VII</td>
            </tr>
            <tr>
              <td>Можливі валентності</td>
              <td>I</td>
              <td>II</td>
              <td>III</td>
              <td>II, IV</td>
              <td>III, V</td>
              <td>II, IV, VI</td>
              <td>I, III, V, VII</td>
            </tr>
          </tbody>
        </table>
        <h3>Таблиця 5. Алгоритм складання формул бінарних сполук</h3>
        <table>
          <thead>
            <tr>
              <th>Порядок дій</th>
              <th>Приклади обчислень</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Записуємо символи елементів у необхідному порядку та позначаємо їхню валентність</td>
              <td>III Al II O</td>
              <td>VI S I F</td>
              <td>IV C II S</td>
            </tr>
            <tr>
              <td>2. Знаходимо найменше спільне кратне (НСK) для значень валентностей елементів</td>
              <td>НСK (III і II) = 6</td>
              <td>НСK (VI і I) = 6</td>
              <td>НСK (IV і II) = 4</td>
            </tr>
            <tr>
              <td>3. Число атомів певного елемента дорівнює відношенню НСК до валентності цього елемента</td>
              <td>6 : III = 2 (Al)<br>6 : II = 3 (O)</td>
              <td>6 : VI = 1 (S)<br>6 : I = 6 (F)</td>
              <td>4 : IV = 1 (C)<br>4 : II = 2 (S)</td>
            </tr>
            <tr>
              <td>4. Записуємо отримані індекси після символів елементів</td>
              <td>III II Al₂O₃</td>
              <td>VI I SF₆</td>
              <td>IV II CS₂</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table">
        {elements && elements.map((element, index) => (
          <Element
            key={index}
            element={element}
            handleClick={(event) => handleClick(element, event)}
            lightUp={lightUp}
          />
        ))}
      </div>
      <ElementInfo selectedElement={selectedElement} position={position} />
      <div className="task">
        <h3>Визначіть валентність елементів у бінарних сполуках:</h3>
        {compounds && compounds.map((compound, index) => (
          <div key={index} className="compound-task">
            <p onClick={() => handleCompoundClick(compound)}>
              {compound.formula}
            </p>
            {selectedCompound && selectedCompound.formula === compound.formula && (
              <div className="answer">
                Відповідь: {selectedCompound.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="task">
        <h3>Знайди помилку і виправ:</h3>
        {errors && errors.map((error, index) => (
          <div key={index} className="error-task">
            <div onClick={() => handleErrorClick(error)}>
              <MoleculeNode molecule_formula={error.formula} />
            </div>
            {selectedError && selectedError.formula === error.formula && (
              <div className="answer">
                Відповідь: {selectedError.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Task questions={questions} handleAnswer={handleAnswer} answers={answers} />
    </div>
  );
};

export default PeriodicTable;
