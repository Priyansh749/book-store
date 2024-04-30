const mg = require("mongoose")

const Schema = mg.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = mg.model("Book", bookSchema);