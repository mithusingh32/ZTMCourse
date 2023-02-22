/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', (t) => {
    t.increments('id').primary().unique().notNullable();
    t.string('name', 100);
    t.text('email').unique();
    t.bigint('entries').defaultTo(0);
    t.date('joined').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
