/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('login').del()
  await knex('login').insert([
    {id: 1, email: 'test@test', hash: '$2b$10$.LDfcaTOkoVTlj.dUJOev.7u39xVq39kOiLbmLo4Z0vwaJav9gBWy'}
  ]);
};
