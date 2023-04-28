
const pool=require('./connection')
const connectDb=()=>{
pool.connect().then(console.log('db connected Successfully')
).catch(e=>console.log(e)
);
}

module.exports=connectDb;