/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('login', (t) => {
    t.increments('id').primary();
    t.foreign('id').references('user.id').onDelete('CASCADE').onUpdate('CASCADE');
    t.text('email').primary().unique().notNullable();
    t.foreign('email').references('user.email').onDelete('CASCADE').onUpdate('CASCADE');
    t.string('hash', 100);
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('login');
};
