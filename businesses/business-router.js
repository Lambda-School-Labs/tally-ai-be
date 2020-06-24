const express = require("express");
const Businesses = require("./business-model");
const router = express.Router();
const middleware = require("../users/validate-id-middleware");


router.get('/', (req, res ) => {
  Businesses.getBusinessses()
  .then(business => {
    res.status(200).json(business)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: 'there was an error'})

  })
})

module.exports = router