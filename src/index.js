const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json());

// configure swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.use(cors());

// Require employee routes
const employeeRoutes = require('./routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});