import React, { useState } from 'react';

const Learn = () => {
  const [skill, setSkill] = useState('Basics');
  const skills = {
    Basics: {
      name: 'Basics',
      questions: [
        'Level One',
        'Level Two',
        'Level Three',
        'Level Four',
        'Level Five',
      ],
    },
    Pitch: {
      name: 'Pitch',
      questions: ['Middle 4', 'Lower 3', 'Higher 5', 'Lower 2', 'Higher 6'],
    },
    Scales: {
      name: 'Scales',
      questions: [
        'Major',
        'Natural Minor',
        'Harmonic Minor',
        'Melodic Minor',
        'Modes',
      ],
    },
    Keys: {
      name: 'Keys',
      questions: ['Sharps', 'Flats', 'The Circle of Fifths'],
    },
    Rhythm: {
      name: 'Rhythm',
      questions: ['Time signatures', 'Note lengths', 'Rests'],
    },
    Play: {
      name: 'Play',
    },
  };

  const clickHandler = (e) => {
    const name = e.target.name;
    setSkill(name);
  };
  console.log(skill);
  console.log(Object.values(skills));
  return (
    <section className="row">
      <div className="grid">
        <div className="center">
          <div className="col-1-3 leaderboard">
            {Object.values(skills).map((item) => (
              <button
                className="skillSelect"
                onClick={(e) => clickHandler(e)}
                name={item.name}
                key={item.name}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="col-6-10 categories">
            <section className="row skills">
              <button className="skill">LEVEL ONE</button>
              {Object.values(skills).map((item) => {
                if (item.name === skill) {
                  return <button>{item.questions}</button>;
                }
              })}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
