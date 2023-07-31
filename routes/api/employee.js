const express = require('express');
const router = express.Router();

const data = {};

data.employees = require('../../data/employees.json');

router
  .route('/')
  .get((req, res) => {
    res.json(data.employees);
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  });

module.exports = router;
