const express = require('express');
const prometheusMetrics = require('./middleware/promMiddleware');
const app = express();
const routes = require('./routes/restaurantRoutes');

app.use(express.json());

app.get('/',(req, res) => {
  const response = {
    message: 'Votre requête a bien été reçue !',
  };
  res.json(response);
});

app.use(prometheusMetrics);
app.use(routes);

module.exports = app;