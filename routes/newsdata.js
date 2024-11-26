import express from 'express';


import {newsData} from '../controllers/dataController.js'

 export  const newsDataRouter=express.Router();

 
 
 newsDataRouter.get('/data',newsData);
