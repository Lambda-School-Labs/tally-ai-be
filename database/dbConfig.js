// require('dotenv').config({ path: '../' });

const knex = require("knex");

const config = require("../knexfile");

const dbEnv = 'production'

// const dbEnv = process.env.ENVIRONMENT || 'development'

module.exports = knex(config[dbEnv]);
