const mongoose = require('mongoose')//Module Mongoose Data Base
const Schema = mongoose.Schema;//Define the Schema

//Schema
const TaskSchema = new Schema({
    type_document: String,
    document_id: String,
    name: String,
    lastname: String,
    address: String,
    email: String,
    telephone: String,
    cellphone: String,
    website: String,
    description: String
})

module.exports = mongoose.model('FormularioOfertaLaboral', TaskSchema)//Export the Schema
