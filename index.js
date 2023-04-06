const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const request=require("request");

const port=process.env.PORT;

app.use(bodyParser.urlencoded(
    {
        extended:true
    }
));

app.get("/",function(req,res)
{
   res.send("hello world!");
});




app.listen( port || 3000,function()
{
    console.log("port run at 3000")
});
