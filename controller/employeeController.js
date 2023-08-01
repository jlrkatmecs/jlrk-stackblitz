const data = {};
data.employees = [];

//data.employees = require('../data/employees.json')

const getAllEmployees = (req,res) => {
    res.json(data.employees);
}

const insertEmployee = (req,res) => {
    var id = (data.employees.length) ? data.employees[data.employees.length-1].id + 1 : 1;
    var newEmployee = {"id": id , "firstname":req.body.firstname,"lastname":req.body.lastname};
    data.employees.push(newEmployee);
    res.status(200).json(data.employees);
}

const updateEmployee = (req,res) => {
    var index = data.employees.findIndex( (e) => e.id == parseInt(req.params.id));
    res.json(index);
}

const deleteEmployee = (req,res) => {
    var index = data.employees.findIndex( (e) => e.id == parseInt(req.params.id));
    res.json(index);
}

module.exports = {getAllEmployees,insertEmployee, updateEmployee, deleteEmployee};