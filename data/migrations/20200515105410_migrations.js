
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments(); //unique id 
            tbl.string('projects_name', 255).unique().notNullable();  //primrary key
            tbl.string('description', 120);
            tbl.boolean('completed').defaultTo(false);
        })
        .createTable('tasks', tbl => {
            tbl.increments(); //unique id 
            tbl.string('tasks_name', 255).unique().notNullable();  //primrary key
            tbl.string('description', 255).notNullable();
            tbl.string('notes', 255);
            tbl.boolean('completed').defaultTo(false);
            //foreign key
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('resources', tbl => {
            tbl.increments(); //unique id 
            tbl.string('resources_name', 255).unique().notNullable();  //primrary key
            tbl.string('description', 255).notNullable();
        })
        .createTable('projects_resources', tbl => {
            //need foreign key that connects to project table
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('store')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            //need foreign key that connects to resources table
            tbl.integer('resources_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('store')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })

}; //end of exports.up

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')

};
