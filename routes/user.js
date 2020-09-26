const express = require("express");
const router = express.Router();
const path = require("path");                   

const admin = require("./admin");       

router.get("/",(req, res, next) => {  

      
    res.render("index", 
    {
        title : "Homepage", 
        prds: admin.products,
        path : "/"      
    
    });       

});

module.exports = router;   