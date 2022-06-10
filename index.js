const app = require('./app');

//adding database
require('./configure/db');

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}...`);
});