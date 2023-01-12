const uuid = require('uuid');
const db = require('./database');

let users = {};

const populateUsers = () => {
  return db
    .find({})
    .sort()
    .then((data) => {
      if (data) {
        data.map((obj) => {
          users[obj.username] = obj.password;
        });
      }
    });
};

class Session {
  constructor(username, expiresAt) {
    this.username = username;
    this.expiresAt = expiresAt;
  }

  isExpired() {
    this.expirestAt < new Date();
  }
}

const sessions = {};

module.exports = {
  signinHandler: (req, res) => {
    // populate users and then check
    populateUsers().then(() => {
      const { username, password } = req.body;
      // console.log('user: ', username, 'pass: ', password);
      if (!username) {
        res.status(401).end();
        return;
      }

      const expectedPass = users[username];
      if (!expectedPass || expectedPass !== password) {
        res.status(401).end();
        return;
      }

      const sessionToken = uuid.v4();

      const now = new Date();
      const expiresAt = new Date(+now + 120 * 1000);

      const session = new Session(username, expiresAt);

      sessions[sessionToken] = session;

      res.cookie('session_token', sessionToken, { expires: expiresAt });
      res.end();
    });
  },

  welcomeHandler: (req, res) => {
    // console.log(sessions);
    if (!req.cookies) {
      res.status(401).end();
      return;
    }

    const sessionToken = req.cookies['session_token'];
    if (!sessionToken) {
      res.status(401).end();
      return;
    }

    userSession = sessions[sessionToken];
    if (!userSession) {
      res.status(401).end();
      return;
    }

    if (userSession.isExpired()) {
      delete sessions[sessionToken];
      res.status(401).end();
      return;
    }
    res.send(`${userSession.username}`).end();
  },

  refreshHandler: (req, res) => {
    const { username } = req.body;
    if (!req.cookies) {
      res.status(401).end();
      return;
    }

    const sessionToken = req.cookies['session_token'];
    if (!sessionToken) {
      res.status(401).end();
      return;
    }
    userSession = sessions[sessionToken];
    if (!userSession) {
      res.status(401).end();
      return;
    }
    if (userSession.isExpired()) {
      res.status(401).end();
      return;
    }

    const newSessionToken = uuid.v4();

    const now = new Date();
    const expiresAt = new Date(+now + 120 * 1000);

    const session = new Session(username, expiresAt);

    sessions[newSessionToken] = session;
    delete sessions[sessionToken];

    res.cookie('session_token', sessionToken, { expires: expiresAt });
    res.end();
  },

  logoutHandler: (req, res) => {
    if (!req.cookies) {
      res.status(401).end();
      return;
    }
    const sessionToken = req.cookies['session_token'];

    if (!sessionToken) {
      res.status(401).end();
      return;
    }

    delete sessions[sessionToken];

    res.cookie('session_token', '', { expires: new Date() });
    res.end();
  },
};
