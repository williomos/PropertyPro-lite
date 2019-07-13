const express = require('express');
const router = express.Router();
//const ctrproperty = '../controllers/property';

router.get('/property', (req, res) => {
    res.send(ctrproperty)
});



//export default router;
module.exports = router;
