const mongoose = require('mongoose');

const linkdata = new mongoose.Schema({
    url:{type:String ,
         required:true,
         unique:true   
        },
    context:{type:String ,
             required:true,
             unique:true
            }
},{timestamps:true}
);

module.exports = mongoose.model('Linkdata' , linkdata);