const db = require('../database/dbConfig');
const knex = require('knex')
const bcrypt = require('bcryptjs')


const getBusinessses = () => {
  return db('tallyweb.business')
}

const getBusiness = (filter) => {
  return db('tallyweb.business as b')
  .where(filter)
  .select('b.id')
  .first()
}


module.exports = {
getBusiness,
getBusinessses
}