const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.json()); //Para recibir datos y mandarlos como json

//router
app.use('/api/clients', require('./routes/clients'));
/* app.get('/api/phones', require('./routes/phones'));
app.get('/api/orders', require('./routes/orders'));
 */

module.exports = app;