const express = require("express");
const Auth = require("./middleware/Auth")
const routes = express.Router();


routes.get("/",Auth(["admin"])  ,(req,res,next)=>{
    res.status(200).json({
        message :"hello world"
    })
})
.get("/profile", (req, res) => {
  res.status(200).json({message :`Hello world`});
});

module.exports = routes;