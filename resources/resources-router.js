const express = require('express');
const Resources = require('./resources-model.js');

const router = require('express').Router();


router.get('/', (req,res)=>{
    Resources.getResources()
    .then(resources=>{
        res.status(200).json(resources)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})



router.post('/', (req,res)=>{
    // const body = req.body;
   Resources.addResource(req.body)
    .then(resource=>{
        res.status(201).json(resource)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})


module.exports = router; 