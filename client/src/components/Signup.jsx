import React from 'react';
import axios from 'axios';

const Signup = () => {
  // Modal
  var btn = document.getElementById('myBtn');

  const openModal = () => {
    const modal = document.getElementById('loginModal');
    if (modal === null) {
      const modal = document.getElementById('loginModal');
      console.log(modal);
    } else {
      modal.style.display = 'block';
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('loginModal');
    const span = document.getElementsByClassName('close')[0];
    if (modal === null || span === null) {
      const modal = document.getElementById('loginModal');
      const span = document.getElementsByClassName('close')[0];
    } else {
      modal.style.display = 'none';
    }
  };

  window.onclick = (e) => {
    const modal = document.getElementById('loginModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };

  const createUser = (u, p) => {
    axios
      .get(`/users/${u}`, {
        username: u,
      })
      .then((user) => {
        if (user.data.username) {
          alert('User already exists!');
        } else {
          axios
            .post('/users', {
              username: u,
              password: p,
            })
            .then(() => {
              window.location.reload();
              console.log('user posted');
            })
            .catch((err) => {
              console.log('post user error: ', err);
            });
        }
      })
      .catch((err) => console.log('get user error: ', err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.userSign.value;
    const pass = e.target.passSign.value;
    console.log(user, pass);
    createUser(user, pass);
    // window.location.reload();
  };
  return (
    <>
      <button className="signup" onClick={openModal}>
        Sign up!
      </button>
      <div id="loginModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            X
          </span>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Input username!</h3>
              <textarea type="text" name="userSign" maxLength="100" />
            </div>
            <div>
              <h3>Input password!</h3>
              <textarea type="text" name="passSign" maxLength="100" />
            </div>
            <button className="signup" type="Submit">
              Sign up!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
