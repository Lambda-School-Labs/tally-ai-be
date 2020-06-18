const goodRegistration = {
  first_name: "john",
  last_name: "quincy",
  email: "thisisanemail@email.com",
  password: 'testingpassword'
}

const badRegistration = {
  first_name: "john",
  last_name: "quincy",
  email: '',
  password: 'testingpassword'
}

const goodLogin = {
  email: 'thisisanemail@email.com',
  password: 'testingpassword'
}

const badLogin = {
  email: 'thisisanemail@email.com',
  password: 'badpass'
}

module.exports = {
  goodLogin,
  goodRegistration,
  badLogin,
  badRegistration
}