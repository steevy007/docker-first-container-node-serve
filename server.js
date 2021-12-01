const express=require('express')
const app=express()

let count=0


app.get('/',(req,res)=>{
    count++
    res.send(`Hello World! this has be visited ${count} time`)
})
app.listen(5000,()=>console.log('Server Start'))