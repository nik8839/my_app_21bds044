const express=require('express')
const app=express();
const PORT =3000;
app.get('/',(req,res)=>{
    res.send("welcomone to my node js application");
})
app.listen(PORT,()=>{
    console.log(`app is running at  http://localhost:${PORT}`);
})