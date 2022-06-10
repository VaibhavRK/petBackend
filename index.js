const app = require('./app');
require('./configure/db');

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}...`);
});