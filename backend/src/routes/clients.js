const {Router} = require('express'); // router es de express!!! i forgot it 
const router = Router();
const { getClients, createClient  } = require('../controllers/clients.controllers');


/* API DE CLIENTS */

router.route('/')
    .get(getClients)
    .post(createClient)

module.exports = router;