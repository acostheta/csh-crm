const clientsCtrl = {} // Crea el objeto que llevará como parámetros las funciones controladoras.
const Client = require('../models/Client');


// Root

// (Se mandan datos al cliente) <[get]=  (pasa por controllers) (llegan los datos a la api) <[find]= (se envian a la api) (Se toman los datos de mongo) 

clientsCtrl.getClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients)
};

// (Orden creada) =[post]> (Llega a controllers) (En Controllers se transforma a json) =[save]>  (Llega a mongo) (Se guarda)

clientsCtrl.createClient = async (req, res) => {
    // Se toman los datos del req.body mediante destructuring
    const {
        firstName, lastName, nationality, documentNumber, phoneNumber, totalPurchases
    } = req.body

    // Se crea una nueva instancia Clients con nuestras nuevas variables
    const newClient = new Client({
        firstName, lastName, nationality, documentNumber, phoneNumber, totalPurchases
    });
    await newClient.save();
    res.send(newClient);
}

module.exports = clientsCtrl;