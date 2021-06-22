const {Router} = require('express'); // router es de express!!! i forgot it 
const router = Router();

/* API DE CLIENTS */

router.route('/')
    .get((req, res) => res.send('Tenemos un enrutador') );

module.exports = router;