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

// Delete Client

clientsCtrl.deleteClient = async (req, res) => {
    const message = `Client id:${req.params.id} deleted successfully`
    await Client.findOneAndDelete(req.params.id)
    res.json({"message": message});
};

clientsCtrl.editClient = async (req, res) => {
    // Se toman los datos del req.body mediante destructuring
    const {
        firstName, lastName, nationality, documentNumber, phoneNumber, totalPurchases
    } = req.body
    
    const updatedNote = {
        firstName, lastName, nationality, documentNumber, phoneNumber, totalPurchases
    }

    // Se usa findByIdAndUpdate, usando req.params.id para señalar la entrada, y el objeto para entregar los datos nuevos.
    await Client.findByIdAndUpdate(req.params.id, updatedNote);
    res.send(updatedNote);
}

module.exports = clientsCtrl;