const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const modules = require('./src/routers');

const db = require('./src/models');
const path = require('path');
const app = express();
const swaggerDoc = require('./src/config/swagger');
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/v1/api', modules);
app.use(express.static(path.join(__dirname, '/src/images')));
app.get('/v1/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to CRM Admin Backend' });
});
app.use('*', (req, res) => {
  res.status(200).send({ message: 'Invalid Api Endpoints' });
});

const PORT = process.env.PORT || 5002;

db.sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log('DB Synced');
  })
  .catch((err) => {
    console.log('Failed to Sync DB : ', err.message);
  });
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
