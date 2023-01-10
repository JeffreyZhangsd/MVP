import React from "react";
import Learn from "./Learn";
import Login from "./Login";
import Main from "./Main";

const App = () => {
  // javascript functionality yes
  // I want to use views for Learn and switch between them

  return (
    <section className="row">
      <div className="grid">
        <section>
          <div>
            <h1>Here is App</h1>
            <Learn />
            <Login />
            <Main />
          </div>
        </section>
      </div>
    </section>
  );
};

export default App;
