const express=require('express');
const pool=require('./src/connection/connection');
const cors = require("cors");


const app=express();


app.use(express.json());
app.use(cors());



const querry='select * from formdata';


app.post('/formData' ,(req,res)=>{
    console.log(req.body);
    // data = req.body;

    // const sendFormData=()=>{
    //     app.post('/')
    // }

    res.status(200).json({ message: 'User created successfully.' });
})

// app.get('/formData', (req,res)=>{
//     pool.query(querry,(err,result)=>{
//         if(err) console.log(err);
//         else{ res.send(result.rows[0]);
//         console.log('data send successfully');
//         }
        
//     })
// })
app.get("/formData",(req,res)=>{
    try {
        pool.query(querry,(err,result)=>{
                    if(err) console.log(err);
                    else{ res.status(200).json({data:result.rows});
                    console.log('data send successfully');
                    }
                    
                })
        
    } catch (error) {
        console.log(error);
        
        
    }
})


app.listen(4000,()=>console.log('sever is running on 4000'))

