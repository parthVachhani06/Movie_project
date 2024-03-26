const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies').then(() => {
    console.log("db start ....");
}).catch(err => console.log(err));

module.exports = mongoose;

