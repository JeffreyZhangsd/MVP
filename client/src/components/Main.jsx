import React from 'react';

const Main = ({ changeView }) => {
  return (
    <section className="row">
      <div className="grid">
        <section className="center">
          <div className="col-1-3 leaderboard">
            <h2>LEADERBOARD</h2>
          </div>
          <div className="col-6-10 categories">
            <section className="row skills">
              <button className="skill" name="Basics" onClick={changeView}>
                Basics
              </button>
            </section>
            <section className="row skills">
              <button className="skill" name="Pitch" onClick={changeView}>
                Pitch
              </button>
              <button className="skill" name="Scales" onClick={changeView}>
                Scales
              </button>
            </section>
            <section className="row skills">
              <button className="skill" name="Keys" onClick={changeView}>
                Keys
              </button>
              <button className="skill" name="Rhythm" onClick={changeView}>
                Rhythm
              </button>
            </section>
            <section className="row skills">
              <button className="skill" name="Play" onClick={changeView}>
                Play your instrument!
              </button>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Main;
