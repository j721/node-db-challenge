
const express = require('express')

const resourcesRouter = require('./resources/resources-router');
const projectsRouter = require('./projects/projects-router');
const tasksRouter = require('./tasks/tasks-router');

const db = require('./data/db-config.js');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

module.exports = server;



