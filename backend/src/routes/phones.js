const {Router} = require('express');
const router = Router();

/* PHONES */

router.route('/')
    .get( (req, res) => res.send('Api de phones'))


module.exports = router;