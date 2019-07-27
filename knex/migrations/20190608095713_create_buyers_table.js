exports.up = function (knex, Promise) { 
  knex.schema.hasTable('buyers')
  return knex.schema.createTable('buyers', function (table) {
    table.increments('id')
    table.string('clientname').notNullable()
    table.integer('income').notNullable()
    table.integer('cashdown')
    table.integer('budget')
    table.string('creditgrade').notNullable()
    table.string('commentsection')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('buyers'),

}