const jwt = require('jsonwebtoken');

const {redisClient} = require("../db/redis-utils");

/**
 * Main logic for handling signing in and creating sessions (JWT token)
 * @param req - Request
 * @param res - Response
 * @param dbUtils - Database Utils
 * @param bcrypt - BCrypt
 */
const signIn = (req, res, dbUtils, bcrypt) => {
  const {email, password} = req.body;
  if (email && password) {
    dbUtils.getUserFromEmail(email).then((result) => {
        if (!result || result.length === 0) {
          return res.status(500).json('fail');
        } else if (result.length > 1) {
          return res
            .status(500)
            .json(
              'please contact admin immediately. Multiple accounts found with ' + email,
            );
        } else {
          const {id, name, email, entries, joined, hash} = result[0];
          bcrypt.compare(password, hash, (err, result) => {
              if (result) {
                const userData = {
                  id,
                  name,
                  email,
                  entries,
                  joined,
                };
                const token = createSession(id, email);
                if (token === "failures") {
                  return res.status(403).json({error: 'Could not create token. Please contact admin at fake@email.com'});
                } else {
                  return res.status(200).json({status: 'success', user: userData, token});
                }
              } else {
                return res.status(403).json('Password/Email Combo Do Not Match');
              }
            }
          );
        }
      }
    )
      .catch(() => {
        return res.status(403).json('Password/Email Combo Do Not Match');
      });
  }
}

/**
 * Set's the token in redis
 * @param key - Key
 * @param value - Value
 * @returns {Promise<unknown>} - Promise of setting token in redis
 */
const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value))
};

/**
 * Creates JWT token and set's the token
 * @param id - ID of user
 * @param email - Email of user
 * @returns {string} - JWT Token
 */
const createSession = (id, email) => {
  let token = jwt.sign({id, email}, process.env.JWT_SECRET);
  setToken(token, id).catch(() => {
    token = "failure"
  })
  return token
}

/**
 * Retrieves token from redis
 * @param token - JWT token from request header
 * @param res - Response
 */
const getTokenId = (token, res) => {
  redisClient.get(token, (err, resp) => {
    if (err || !resp) return res.status(400).json("Unauthorized");
    return res.status(200).json({id: resp});
  });
}

/**
 * Handles sign in
 * @param req - Request
 * @param res - response
 * @param dbUtils - Database Utils
 * @param bcrypt - BCrypt
 */
const handleSignIn = (req, res, dbUtils, bcrypt) => {
  const {authorization} = req.headers;
  return authorization ? getTokenId(authorization.split(' ')[1], res) :
    signIn(req, res, dbUtils, bcrypt);
}

module.exports = {
  handleSignIn
}
