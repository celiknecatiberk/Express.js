const express = require("express");
const router = express.Router();

const products = [
    {name : "Samsung S8", price : 3000, image: "1.jpg" , description: "Samsung Akıllı Telefon"},
    {name : "Samsung S7", price : 3000, image: "2.jpg" , description: "Samsung Akıllı Telefon"},
    {name : "Samsung S9", price : 3000, image: "3.jpg" , description: "Samsung Akıllı Telefon"},
    {name : "Iphone 7S", price : 5000, image: "4.jpg" , description: "Apple Akıllı Telefon"}
]

router.get("/add-product", (req, res, next) => {        
    res.render("add-product", 
    {
        title : "Add a new product",
        path : "/admin/add-product"    
    });      
});


router.post("/add-product", (req, res, next) =>{          
    products.push({name : req.body.name, price : req.body.price, image : req.body.image, description : req.body.description}); 
    res.redirect("/");          
});

exports.routes = router;              
exports.products = products;    