//import express from 'express';
const express = require('express');
// //import  userRoutes from './API/routes/user';
const userRoutes = require('./API/routes/user');
// import  propertyRoutes from './API/routes/property';
//const propertyRoutes = require('./API/routes/property');

const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/signup', userRoutes);
//app.use('/api/v1/property', propertyRoutes);


//export default app;
module.exports = app;
