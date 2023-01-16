const router=require('express').Router();
const {CityController}=require('../controller/index');
const controller=new CityController();
router.post('/create',controller.create(req,res));
router.delete('/:id',controller.destroy(req,res));