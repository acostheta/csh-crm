const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

// Mongoose constructor
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

// esta instancia anterior es para trabajar lo que sigue:
// hacer lo que sea una vez la base esté conectada
connection.once('open', () => {
    console.log('DB IS CONNECTED');
});

// Para que este mensaje aparezca, requerir en app.js
