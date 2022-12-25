const express=require('express')
const app=express()


app.use(express.static('public'))
app.use(express.static('files'))

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(3000,function(){
	console.log("SERVER ON")
});
