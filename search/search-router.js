const express = require('express');
const Businesses = require('../businesses/business-model')
const router = express.Router()


// Search business by Name and City
//TODO: refactor to use query string, and remove middleware for auth check
router.post('/', (req, res) => {
  Businesses.searchBusiness(req.body)
  .then(business => {
    if(business.length < 1) {
      res.status(404).json({message: 'No businesses found with those search parameters'})
    }
    else{
      res.status(200).json(business)
    }
  })
  .catch(error => {
    res.status(500).json({message: "Error searching for businesses",error})
  })
})


// Return all business names only in array.
router.get('/',(req,res) => {

  Businesses.searchAllBusinessName()
    .then(businesses => {
      res.status(200).json(businesses.map(name => name.name))
    })
    .catch(err => {
      res.status(500).json({message: "Error searching for name",err})
    })
})


router.get("/business", (req,res) => {
  const {name} = req.query;
  if(!name){
    res.status(404).json({message: "Please include business name."})
    return
  }
  Businesses.searchBusinessByName(name)
    .then(business => {
      if( business.length > 1){

        res.status(200).json(business[0])
      } else {
        res.status(404).json({message: "No business found"})
      }
    })
    .catch(err =>{
      res.status(500).json({message: "Error returning business", err})
    })
})

module.exports = router