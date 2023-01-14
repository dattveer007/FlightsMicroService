const {CityRepositroy}=require('../repository/index');
class CityServices{
    constructor(){
        this.cityrepository=new CityRepositroy();
    }
    async createCity({name}){
        try {
            const city=  await this.cityrepository.createCity(name);
            return city;
        } catch (error) {
            throw(error);
        }
    }
    async deleteCity(cityid){
        try {
            const response= await  this.cityrepository.deleteCity(cityid);
            return response
        } catch (error) {
            throw (error);            
        }
    }
}
module.exports=CityServices;