/* eslint-disable no-console */
/* eslint-disable no-undef */
const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const properties = [
    {id:1, owner: 'person1', status: 'available', price: 2000, state: 'state1', city: 'city1', address: 'address1', type: 'type1'}, 
    {id:2, owner: 'person2', status: 'available', price: 2100, state: 'state2', city: 'city2', address: 'address2', type: 'type2'},
    {id:3, owner: 'person3', status: 'available', price: 2200, state: 'state3', city: 'city3', address: 'address3', type: 'type3'},
];


// getting many/all properties
app.get('/api/properties',(req, res)=> {
    res.send(properties);
});

// getting one property

app.get('/api/properties/:id',(req, res)=> {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if(!property) return res.status(404).send('The property not found..' );
    res.send(property);
});

//validation 

function validateProperty(property){
    const schema = {
        owner: Joi.string().min(3).required(),
        status: Joi.string().min(3).required(),
        price: Joi.string().min(3).required(),
        state: Joi.string().min(3).required(),
        city: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
        type: Joi.string().min(3).required()
        
    };
    return Joi.validate(property,schema);
}

//Posting or creating

app.post('/api/properties', (req,res) => {
    const {error} = validateProperty(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const property = {
        id: properties.length + 1,
        owner: req.body.owner,
        status: req.body.status,
        price: req.body.price,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        type: req.body.type      
        
    };
    properties.push(property);
    res.send(property);
    });

// Put or update

    app.put('/api/properties/:id', (req,res) => {
        const property = properties.find(p=>p.id === parseInt(req.params.id));
        if(!property) return res.status(404).send('The property not found');
        const {error} = validateProperty(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
            property.owner = req.body.owner;
            property.status = req.body.status;
            property.price = req.body.price;
            property.state = req.body.state;
            property.city = req.body.city;
            property.address = req.body.address;
            property.type = req.body.type;   
            
        res.send(property);
        });

//deleting

        app.delete('/api/properties/:id',(req, res)=> {
            const property = properties.find(p => p.id === parseInt(req.params.id));
            if(!property) return res.status(404).send('The property not found..' );

            const index = properties.indexOf(property);
            properties.splice(index,1);
            res.send(property);


        });

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}...`));
