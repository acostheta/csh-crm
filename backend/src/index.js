require('dotenv').config(); // Para obtener las variables de entorno que se configuran en la database
const app = require('./app');
require('./database') // Cargar la base de datos 




async function main () {
    await app.listen(app.get('port'));
    console.log(`Listening on port ${app.get('port')}...`);
    app.get('/', (req, res) => {
        res.send('Welcome to home!')
    })
}

main();
