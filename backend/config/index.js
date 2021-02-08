require('dotenv').config();

const config = {
  port: process.env.PORT || 9001,
  mongo: process.env.DB_MONGO || ''
};

module.exports = { config };
