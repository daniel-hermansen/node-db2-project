
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 64).unique().notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Model', 128).notNullable();
      tbl.integer('Mileage').notNullable();
      tbl.string('Transmission', 128);
      tbl.boolean('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
