const {PORT}=require('./config/serverConfig');
const setupAndStart=async ()=>{
    const app=require('express')();
    const bodyParser=require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',require('./routes/index'));
    app.listen(PORT,(error)=>{
        console.log(`Server is running on ${PORT}`);
    })
    
}
setupAndStart();
