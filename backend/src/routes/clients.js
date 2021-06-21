const {Router} = require('express'); // router es de express!!! i forgot it 
const app = require('../app');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Tenemos un enrutador') );

module.exports = router;