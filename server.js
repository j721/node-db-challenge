// const express = require('express');

// const projectsRouter = require('./projects/projects-router');

// const db = require('./data/db-config.js');

// const server = express();

// server.use(express.json());

// server.use('/api/projects', projectsRouter)
// // server.use('/api/resources', resourcesRouter)
// // server.use('/api/tasks', tasksRouter)

// module.exports = server;


const express = require('express');

const RecipeRouter = require('./projects/projects-router')

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter)

module.exports = server;

