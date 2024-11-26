import express from 'express';


import { loginPage,registerPage, signIn, signUp,logOut} from '../controllers/userController.js';

 export  const userRouter=express.Router();

 
 
 userRouter.get('/login',loginPage);
 userRouter.get('/register',registerPage);
 userRouter.post('/signin',signIn);
 userRouter.post('/signup',signUp);
 userRouter.get('/logout',logOut)
