require('dotenv/config');

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const configJwt = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tok = (payload) => {
    const token = jwt.sign({ payload }, secret, configJwt);
    return token;
};

const validaTok = (tk) => jwt.verify(tk, secret);

module.exports = { tok, validaTok };