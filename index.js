import express from 'express';
import path from 'path';
import session from 'express-session';
import EjsLayouts from 'express-ejs-layouts';
import {homeRouter} from './routes/index.js'


const app=express();
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views',path.join(path.resolve(),'views'));
app.use(EjsLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(session({
    secret:'SecretKey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

app.use('/', homeRouter);
app.listen(3200,(req,res)=>{
    console.log("My Express Server is Up And RUnning");
    
})