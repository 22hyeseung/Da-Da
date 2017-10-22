
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('recipe', t => {
    t.text('recipe').alter()
    t.text('recipe_ingredient').alter()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alter('recipe', t => {
    t.string('recipe_ingredient').notNullable()
    t.string('recipe').notNullable()
  })
};
