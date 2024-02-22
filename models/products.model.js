const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be a positive number"],
    },
    image: {
        type: String,
        required: false
    },
},
    {
    timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
