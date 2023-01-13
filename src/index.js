const app=require('express')();
const {PORT}=require('./config/serverConfig')
app.listen(PORT,(error)=>{
    
    console.log(`Server is running on ${PORT}`);
})
