import UserModel from "../models/user.js";
import  {Newsdata} from '../models/data.js'


export  function loginPage(req,res) {
  
    res.render('login',{
        title:'Login Page',
        errorMessages:null
    })
}


export  function registerPage(req,res) {
  
    res.render('register',{
        title:'Sign Up Page',
    })
}






export function signUp(req,res){
    
    
    const {name,email,password}=req.body;
    const newUser= UserModel.add(name,email,password);
    
    
     res.render('login',{
        errorMessages:null
     });
}

export function signIn(req,res){
    console.log("SignIn Function",req.body)
    const {email,password}=req.body;
   const user= UserModel.isValidUser(email,password);
   console.log("SignIn Function after login",user)

   
    if(!user){
     return   res.render('login',{
            errorMessages:"Invalid Credentials"
        })
    }
    req.session.userEmail=email;
   
    return   res.render('product',{
             Newsdata:Newsdata,
        
        userEmail:req.session.userEmail,
       
    })
 }

 export function logOut(req,res){
    req.session.destroy((err)=>{
        if(err){
            console.log('Error in destroying session',err);
            
        }else{
            res.redirect('/user/login')
        }
    })
   
 }
