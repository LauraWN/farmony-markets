// Require express.
// Connect express to application.
var express = require("express");
var app = express();

// Connect path middleware
var path = require("path");

// Connect bodyparser middleware
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connecting to public assets.
app.use("/public", express.static(path.join(__dirname + "/public")));

// Set up hbs
app.set("view engine", "hbs");

// Farmers Market API
var farmersMarketApi = require("./public/js/market_api.js")

// Port listener.
app.listen(3000, function(){
  console.log("Listening on port 3000.");
});

// Connect to browser.
app.get("/", function(req, res){
  res.render("index", {message: "handlebars is the best"})
  // res.send("Browser time!");
});

// Index route for markets
app.get("/markets", function(req,res){
  // Market.findAll().then(function(markets){
    farmersMarketApi.sayHello()
    res.render("markets/index", {message: "list of markets and a map"})
  // })
})

// Show route for markets
app.get("/markets/:id", function(req,res){
  res.render("markets/show", {message: "info for farmer's market " + req.params.id})
})

// Index route for vendors
app.get("/vendors", function(req,res){
  // Vendor.findAll().then(function(vendors){
    res.render("vendors/index", {message: "list of vendors"})
    // })
})

// New route for vendors
app.get("/vendors/new", function(req,res){
  res.render("vendors/new", {message: "form for new vendor"})
})

// Show route for vendors
app.get("/vendors/:id", function(req,res){
  res.render("vendors/show", {message: "info for vendor " + req.params.id})
})


// Edit route for vendors
app.get("/vendors/:id/edit", function(req,res){
  res.render("vendors/edit", {message: "edit form for vendor " + req.params.id})
})

// Create new vendor route
// app.post("/vendors", function(req,res){
//   Vendor.create(req.body).then(function(vendor){
//     res.json(vendor);
//   })
// })
