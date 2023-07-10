const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CRM VMA Admin', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'This is the REST API for my CRM - VMA Admin Module', // short description of the app
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  servers: [
    {
      url: 'http://localhost:5007/v1/api',
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./src/docs/**.yaml'],
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
