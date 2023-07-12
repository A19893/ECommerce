const mongoose=require("mongoose");
const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://yasharora2678:Yash1234@cluster0.3vpzslr.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then((database)=>{
    console.log(`Connected`);
}).catch((err)=>{
    console.log(err);
})
}
module.exports=connectDatabase