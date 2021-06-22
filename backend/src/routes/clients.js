const {Router} = require('express'); // router es de express!!! i forgot it 
const router = Router();
const { getClients, createClient, deleteClient, editClient  } = require('../controllers/clients.controllers');


/* API DE CLIENTS */

router.route('/')
    .get(getClients)
    .post(createClient)

router.route('/:id')
    .delete(deleteClient)
    .put(editClient)

module.exports = router;