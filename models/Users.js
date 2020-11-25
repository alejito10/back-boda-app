const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,  //no hace falta
        name:{type: String,required: true},
        email:{type:String,unique:true,required:true},
        autobus:{type:String, required:true},
        vegano:{type:String, required:true},
        alergias:{type:String}
    },
    {timestamps: true}
);

UserSchema.pre('save', async function (next) {
    try {  
          console.log('paso por el presave');
        next();
    } catch (err) {
       console.log(err);
       res.json(err);
        throw err;
    }

})

const  users = mongoose.model('users', UserSchema);
module.exports = users;