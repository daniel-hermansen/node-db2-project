
exports.seed = function(knex) {

  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: '438719PD38W94ZO9', Make: 'Ford', Model: 'Fusion', Mileage: 76439, Transmission: 'Automatic', titleStatus: false },
        { VIN: '465719YG98W94ZO9', Make: 'Hyundai', Model: 'Elantra', Mileage: 81274, Transmission: 'Manual', titleStatus: false },
        { VIN: '438719PD387RU8O9', Make: 'Ford', Model: 'Focus', Mileage: 102734, Transmission: 'Automatic', titleStatus: true },
        { VIN: '43O8M7PD38W94Z79', Make: 'Toyota', Model: '4Runner', Mileage: 32859, Transmission: 'Automatic', titleStatus: true },
        { VIN: '438719P987L32V09', Make: 'Toyota', Model: 'Camry', Mileage: 16534, Transmission: 'Automatic', titleStatus: false }
      ]);
    });
};
