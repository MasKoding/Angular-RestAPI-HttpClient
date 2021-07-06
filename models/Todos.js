var mongoose = require('mongoose')

const Todos = new mongoose.Schema({
    title:string,
    description:string,
    status:string
});

module.exports = mongoose.model('Todos',Todos);