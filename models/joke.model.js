const mongoose = require("mongoose");
const { Schema } = require("mongoose");



const BromaSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Se requiere configuración"],
        minLength: [10, "Ningún chiste puede ser tan corto"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is mandatory"],
        minLength: [3, "Menos de tres no es gracioso"]
    }
}, { timestamps: true });

const Broma = new mongoose.model("Broma", BromaSchema);

module.exports = Broma;