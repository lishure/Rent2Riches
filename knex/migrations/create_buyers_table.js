exports.up = function (knex, Promise) { 
  knex.schema.dropTableIfExists('buyers')
 // knex.schema.hasTable('buyers')
  return knex.schema.dropTableIfExists('buyers')
  .createTable('buyers', function (table) {
    table.increments('id')
    table.string('clientname').notNullable()
    table.integer('income').notNullable()
    table.integer('cashdown')
    table.integer('budget')
    table.string('creditgrade').notNullable()
    table.string('timeline').notNullable()
    table.string('commentsection').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('buyers')
 // return knex.schema.dropTable('buyers')
}