const db = require('../data/db-config');

module.exports ={
    getTasks,
    addTask,
    findById
}

// function getTasks(){
//     return db.select ('projects.projects_name', 'projects.description', 'tasks.description', 'tasks.completed')
//     .from('tasks')
//     .join ('projects', 'project_id', 'id')

// }


function getTasks(){
    return db('tasks')
    
}

// function getTasks(){
//     return db('tasks')
//     .join('projects', 'projects.id', 'tasks.project_id')
//     .select('projects.project_name', 'projects.description', 'tasks.description', 'tasks.notes')
// }

function findById(id){
    return db('tasks')
    .where({id})
    .first()
}

function addTask(resource){
    return db('tasks')
    .insert(resource, 'id')
    .then(id=>{
        return findById(id[0])
    })
}