const db = require('../data/db-config');

module.exports ={
    getProjects,
    addProjects,
    findById
}



function getProjects(){
    return db.select ("*")
    .from("projects")
}

 

// function findById(id){
//     return db.select ('*')
//     .from("projects")
//     .where({id})
   
// }

function findById(id){
    return db.select ('projects')
    .where({id})
    .first();  
}

function addProjects(project){
    return db('projects')
    .insert(project, "id")
    .then(id=>{
        return findById(id[0])
    })
}



