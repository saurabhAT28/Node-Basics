const express=require('express')

const app=express()

const homeRoute=require('./routes/home')
const aboutRoute=require('./routes/home')

var path=require('path')

let nunjucks=require('nunjucks')

const port=4000

app.set("vew engine","html")

nunjucks.configure(['views/'],{
    autoescape: false,
    express: app
});


app.use('/',homeRoute)


app.listen(port,()=>{
    console.log("Started on PORT ",port)
})






