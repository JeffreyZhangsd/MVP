import React, { useState } from 'react';

const Keys = ({ changeView }) => {
  const tasks = {
    0: {
      name: 'Getting Started',
      questions: [
        {
          q: 'What is musical pitch?',
          answers: [
            { a: 'a baseball throw to the plate', correct: false },
            { a: 'a single musical sound', correct: true },
            {
              a: 'a baseball throw with background music playing',
              correct: false,
            },
            { a: 'form of words to try to persuade someone', correct: false },
          ],
        },
        {
          q: 'What is a musical note?',
          answers: [
            {
              a: 'a single tone of pitch that can be written',
              correct: true,
            },
            { a: 'a small written message', correct: false },
            { a: 'british money', correct: false },
            { a: 'a record of facts, topics, or thoughts written down' },
          ],
        },
        {
          q: 'What is a musical staff?',
          answers: [
            { a: 'someone in charge of music', correct: false },
            { a: 'a magical music stick', correct: false },
            {
              a: '5 lines and 4 spaces between them where music is noted',
              correct: true,
            },
            { a: 'employed peoples', correct: false },
          ],
        },
        {
          q: 'What is rhythm?',
          answers: [
            { a: 'A regularly repeated pattern of sound', correct: true },
            { a: 'a rhyme', correct: false },
            { a: 'the chorus of a song', correct: false },
            { a: 'a word that is often spelled correctly', correct: false },
          ],
        },
      ],
    }, // one note, duration
    1: { name: 'Time!' },
    2: { name: 'Measure Labels' },
    3: { name: 'Reading Notes' },
    4: { name: 'Additional Info' },
  };

  const [task, setTask] = useState(0);
  const [currQ, setCurrQ] = useState(0);
  const [answered, setAnswered] = useState(false);
  // console.log(tasks[task].questions);

  // tasks[task].questions.forEach((question) => console.log(question.answers));

  const answerHandler = (e) => {
    const bool = e.target.name;
    setAnswered(true);
    if (bool === 'true') {
      console.log('correct yay');
    } else {
      console.log('wrong.');
    }
  };

  const nextHandler = () => {
    if (currQ >= tasks[task].questions.length - 1) {
      changeView();
    } else {
      setCurrQ(currQ + 1);
    }
  };
  return (
    <>
      <section className="row">
        <div className="grid">
          <div>
            <section className="row">
              <h2 className="center">{tasks[task].questions[currQ].q}</h2>
            </section>
            <section className="row center">
              {tasks[task].questions[currQ].answers.map((a, index) => (
                <button
                  className="answers col-1-3"
                  key={a.a}
                  name={`${a.correct}`}
                  onClick={(e) => answerHandler(e)}
                >
                  {a.a}
                </button>
              ))}
            </section>
          </div>
        </div>
      </section>
      <footer className="primary-header container group footer">
        <nav>
          <div>
            <button className="next" onClick={() => nextHandler()}>
              →
            </button>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Keys;
