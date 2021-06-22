const {Schema, model} = require('mongoose');

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    totalPurchases: Number // Buscar incrementar esta propiedad en cada actualización
}, {
    timestamps: true
})

module.exports = model('Clients', clientSchema);