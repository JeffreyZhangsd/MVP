import React, { useState } from 'react';
import axios from 'axios';
import Signup from './Signup';

const Login = ({ changeView }) => {
  const instruments = ['Piano', 'Guitar', 'Violin'];
  const [instr, setInstr] = useState('');
  const img =
    'https://res.cloudinary.com/teepublic/image/private/s--jicz5Wqt--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1260,w_1260,x_-76,y_-203/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-76,y_-203/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1605051920/production/designs/15979663_0';
  // Sign in axios post
  const signIn = (u, p) => {
    if (instr === '') {
      return alert('please select an instrument');
    }
    axios
      .post('/signin', {
        username: u,
        password: p,
      })
      .then(() => {
        axios
          .get('/welcome')
          .then((success) => {
            console.log(success.data);
            changeView();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Submit signin
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const pass = e.target.pass.value;
    signIn(user, pass);
  };
  return (
    <section className="row">
      <div className="grid">
        <section>
          <div>
            <section className="row">
              <div className="welcome">Learn Music Theory today!</div>
            </section>
            <section className="row">
              <div className="col-1-3">
                <form onSubmit={handleSubmit}>
                  <h3>Username</h3>
                  <div>
                    <textarea type="text" name="user" maxLength="100" />
                  </div>
                  <h3>Password</h3>
                  <div>
                    <textarea type="text" name="pass" maxLength="100" />
                  </div>
                  <button className="login" type="Submit">
                    Log in!
                  </button>
                </form>
                <Signup />
                <form id="loginInst">
                  <label htmlFor="inst">
                    Instrument Sound:
                    <br></br>
                    <select
                      id="inst"
                      value={instr}
                      onChange={(e) => {
                        setInstr(e.target.value);
                      }}
                    >
                      <option>Select Instrument!</option>
                      {instruments.map((inst) => (
                        <option key={inst}>{inst}</option>
                      ))}
                    </select>
                  </label>
                </form>
              </div>
              <img className="loginImg" src={img} alt="image" />
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
