const Router=require('express').Router();
const bodyParser=require('body-parser');
Router.use(bodyParser.urlencoded({extends:true}));
Router.use(bodyParser.json());
Router.use('/city',require('./city'));