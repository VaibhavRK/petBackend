const mongoose = require('mongoose');

const main = () =>{
    mongoose.connect('mongodb://localhost:27017/myapi')
    .then(()=>{
        console.log('DB CONNECTED SUCCESSFULLY');
    })
    .catch((err)=>{
        console.log('DB NOT CONNECTED');
        console.log(err);
    })
}

module.exports = main();