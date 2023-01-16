const app=require('express')();
const router=require('express').Router();
const {PORT}=require('./config/serverConfig');
router.use('/api',require('./routes/index'));
app.listen(PORT,(error)=>{
    
    console.log(`Server is running on ${PORT}`);
})
