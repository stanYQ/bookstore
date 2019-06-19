const dbConnet = require('../modules/db/dbConnect');
module.exports = {
    category:(req,res)=>{
        const sql = `select * from category`;
        const data = null;
        dbConnet(sql,data,(results)=>{
            // if(error){
            //     throw error;
            // }
            if(results.length){
                res.json({code:200,data:results});
            }else{
                res.json({code:500,data:[]});
            }
        })
    }
}