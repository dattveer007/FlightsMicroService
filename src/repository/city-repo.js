const {City}=require('../models/index');
class CityRepoistory{
    async   createCity(name){
        try{
            const city=await City.create(name);
            return city;
        }
        catch(error){
            throw(error);
        }
    }
    async deleteCity(cityid){
       try{
            const response=await City.destroy({
                    where: {
                        id:cityid
                    }
                }
            )
            return response;
        }
        catch(error){
            throw(error);
        }
    }
}
module.exports=CityRepoistory;