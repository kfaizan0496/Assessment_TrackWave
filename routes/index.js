import express from 'express';
import {homePage} from '../controllers/home_controllers.js'
import {userRouter} from './user.js'
import {newsDataRouter} from './newsdata.js'
import { auth } from '../middlewares/authMiddleware.js';

 export  const homeRouter=express.Router();
 homeRouter.get('/',homePage);
 homeRouter.use('/user',userRouter);
 homeRouter.use('/news',auth,newsDataRouter);
 


