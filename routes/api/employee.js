const express = require('express');
const router = express.Router();
const {getAllEmployees, insertEmployee, updateEmployee, deleteEmployee} = require('../../controller/employeeController');

router
  .route('/')
  .get(getAllEmployees)
  .put(insertEmployee);

router
  .route('/:id')
  .post(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
