const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'We are confused about swagger'
  },
  host: 'localhost:8080'
};

const outputFile = './swagger.json';
const enpdpointsfile = ['./routes/temple.js', './routes/swagger.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);