
//import express from 'express';
const express = require('express');
const router = express.Router();
const ctrUser = '../controllers/user';

router.get('/user', (req, res) => {
    res.send(ctrUser)
});



//export default router;
module.exports = router;
