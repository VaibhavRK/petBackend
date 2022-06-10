const mongoose = require('mongoose');

const main = () =>{
    let password= process.env.PASSWORD;
    let admin = process.env.ADMIN;

    //connecting to mongodb atlas
    mongoose.connect(`mongodb+srv://${admin}:${password}@cluster0.z7mmb.mongodb.net/?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('DB CONNECTED SUCCESSFULLY');
    })
    .catch((err)=>{
        console.log('DB NOT CONNECTED');
        console.log(err);
    });
}

module.exports = main();