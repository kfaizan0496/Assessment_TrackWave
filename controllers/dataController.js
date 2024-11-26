
import {Newsdata} from '../models/data.js';
 export  function newsData(req,res) {
    console.log(Newsdata);
    
    res.render('product',{
        title:'News Page',
        Newsdata:Newsdata,
        title:"My News Page"
    })
}