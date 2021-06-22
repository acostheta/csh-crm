const {Router} = require('express'); // router es de express!!! i forgot it 
const router = Router();
const { getClient } = require('../controllers/clients.controllers');


/* API DE CLIENTS */

router.route('/')
    .get(getClient);

module.exports = router;