const {CityServices}=require('../services/index');
const cityservice=new CityServices();
class CityController{
    async create(req,res){
        const data=req.body;
        try {
            const city=await cityservice.createCity(data);
            return res.status(201).send({
                data:data,
                success:true,
                message:"City created successfully",
                err:{}
            })
        } catch (error) {
            console.log(error);
            return res.status(401).send({
                data:{},
                success:false,
                message:"Error",
                err:error
            })
            
        }
        
    }
    async destroy(req,res){
        const id=req.body.params;
        try {
            const response=await cityservice.deleteCity(id);
            return res.status(201).send({
                success:response,
                message:"Destroyed",
                err:{}
            });
            
        } catch (error) {
            console.log(error);
            return res.status(201).send({
                success:false,
                message:"Destruction not done",
                err:error
            });
        }
    }
}
module.exports=CityController;