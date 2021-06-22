const {Router} = require('express');
const router = Router();

/* ORDERS */

router.route('/')
    .get( (req, res) => res.send('Api de orders') )
    
module.exports = router;