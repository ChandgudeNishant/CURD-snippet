const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/products.model.js');
const productRoute = require('./routes/product.route.js');
const port = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to mongodb
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

//Route
app.use("/api/products", productRoute);



// Fetch data or get data api  
app.get('/', (req, res) => {
    res.send('Hello World');
});


// Server listen
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
    