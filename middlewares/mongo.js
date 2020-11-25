const mongoose = require('mongoose');

module.exports = async (req, res, next) => {

    try {
        
        await mongoose.connect(process.env.DB_URI , {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('ATLAS_mongodb/boda connected!');
        next();

    } catch(err) {
        console.log('DB error!');
        console.log(err);
        throw err;
    }
};