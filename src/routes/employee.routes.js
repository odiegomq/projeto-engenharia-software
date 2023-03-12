const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/',

    employeeController.findAll);

// Create a new employee
router.post('/'

    /*
      #swagger.description = 'Create employess.'
    */

    /*
      #swagger.parameters['email'] = {
        description: 'E-mail do usuário.',
        type: 'string',
        required: true,
        in: 'body',
        example: 'user@email.com',
      }
    
    */
    , employeeController.create);

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

// Update a employee with id
router.put('/:id', employeeController.update);

// Delete a employee with id
router.delete('/:id', employeeController.delete);

module.exports = router