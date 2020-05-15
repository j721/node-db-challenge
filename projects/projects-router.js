const express = require('express');
const Projects = require('./projects-model.js');

const router = require('express').Router();

router.get('/', (req,res)=>{
    Projects.getProjects()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})



router.post('/', (req,res)=>{
    // const body = req.body;
    Projects.addProjects(req.body)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})


module.exports = router; 