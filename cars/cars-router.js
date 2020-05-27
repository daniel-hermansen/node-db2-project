const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

router.get('/:id', (req, res) => {
const { id } = req.params;

    db('cars').where({ id }).first()
        .then(car => {
            if (!car){
                return res.status(404).json({message: 'No car found with that ID'})
            } else {
                res.status(200).json(car);
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;