const mongoose = require('mongoose');

module.exports = async (req, res, next) => {

    try {
        
        await mongoose.connect('mongodb+srv://alejandro:Aa1475369@cluster0.rtiuw.mongodb.net/boda?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('ATLAS_mongodb/boda connected!');
        next();

    } catch(err) {
        console.log('DB error!');
        console.log(err);
        throw err;
    }
};