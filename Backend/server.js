const app=require('./app');
const connectDatabase=require('./connection/database');
connectDatabase();
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(5000,function(err){
    if(err)
    console.log(err);
    console.log("Server listening on port 5000");
})

