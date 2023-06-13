const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const ingresoSchema = new Schema({
    _id:{required: true},
    user_id:{required:true},
    monto:{type: String, required: true},
    fehca: {type: Date, required: true},
    etiqueta: {type: String, required: true},
    descripcion: {type: String, required: true}
});*/


const userSchema = new Schema({
    _id: { type: String, required: true},
    name: String,
    email:String,
    password: String,
    ingresos: {type: [String], default: []},
    egresos: {type: [String], default: []}

},{collection: 'Usuarios', timestamps: true});

const User = mongoose.model('User', userSchema);

//
module.exports = User;