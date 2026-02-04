const mongoose = require('mongoose');

const linkdata = new mongoose.Schema({
    url:{type:String , required:true},
    context:{type:String , required:true}
},{timestamps:true}
);

module.exports = mongoose.model('Linkdata' , linkdata);