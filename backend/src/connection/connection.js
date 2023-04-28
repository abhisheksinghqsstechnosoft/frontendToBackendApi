 const {Pool} =require('pg') ;

 const pool = new Pool(
    {
        host:'localhost',
        user:'postgres',
        password:'abhisheksingh',
        database:'abhisheksingh'

    }
 )


 module.exports=pool;