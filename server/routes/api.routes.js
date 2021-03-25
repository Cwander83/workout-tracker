const express = require('express');
const router = express.Router()

// get
router.get('/',(req, res)=> res.send('this is a get call'))
// post
//put
// delete

module.exports = router;