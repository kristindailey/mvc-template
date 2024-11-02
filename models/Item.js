const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    textInput: {
        type: String,
        required: true
    },
    numInput: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Item", itemSchema, "items");