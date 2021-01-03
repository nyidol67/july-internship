const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const port = 8900;
const mongoUrl ="mongodb://localhost:27017";
var db;
const cors = require('cors'); 
app.use(cors());

app.use(bodyParser.urlencoded({entended:true}))
app.use(bodyParser.json())

//connection 
MongoClient.connect(mongoUrl,(err,client)=>
{
    if(err) console.log(err);
    db = client.db('appdb');
    app.listen(port,(err)=>
    {
        if(err) console.log(err);
        console.log(`the server is running on port ${port}` );
    })
})
app.get('/',(req,res)=>
{
    res.send("API is running")
})

//city
app.get('/location',(req,res)=>
{
    db.collection('city').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})

//cuisine
app.get('/cuisine',(req,res)=>
{
    db.collection('cuisine').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})
//mealtype
app.get('/mealtype',(req,res)=>
{
    db.collection('mealtype').find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})
//placeorder
//post
app.post('/placeOrder',(req,res)=>
{
    console.log(req.body)
    var data = {
        _id:req.body.order_id,
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        rest_id:req.body.rest_id,
        quantity:req.body.quantity
    }
    db.collection('orders').insertOne(data,(err,result)=>
    {
        if(err) throw err;
        console.log('order placed');
    })
});
//restaurant
app.get('/restaurant',(req,res)=>
{
    var query = {};
    if(req.query.city && req.query.mealtype)
    {
        query = {city:req.query.city,"type.mealtype":req.query.mealtype};
    }
    else if(req.query.city)
    {
        query = {city:req.query.city};
    }
    
    else if(req.query.mealtype)
    {
        query = {"type.mealtype":req.query.mealtype};
    }
    db.collection('restaurant').find(query).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})

//restaurant by giving id as param
app.get('/restaurantdetails/:id',(req,res)=>
{
    const query= {_id:req.params.id}
    db.collection('restaurant').find(query).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})
//filters-sort,cuisine,cost
app.get('/restaurantlist/:city/:mealtype',(req,res)=>
{
    var query={}
    var sort = {cost:1}
    
    if(req.query.cuisine && req.query.lcost && req.query.hcost && req.query.cost){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine,cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.lcost)}}
        sort = {cost:parseInt(req.query.sort)} 
    }
    else if(req.query.cuisine && req.query.lcost && req.query.hcost){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype,cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.lcost)},"Cuisine.cuisine":req.query.cuisine}
    }
    else if(req.query.cuisine && req.query.sort){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
        sort = {cost:parseInt(req.query.cost)};
    }
    else if(req.query.lcost && req.query.hcost && req.query.cost){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype,cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.lcost)}}
        sort = {cost:parseInt(req.query.cost)}
    }
    
    else if(req.query.cuisine){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
    }
    else if(req.query.lcost && req.query.hcost){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype,cost:{$gt:parseInt(req.query.hcost),$lt:parseInt(req.query.lcost)}}
    }
    else if(req.query.cost){
        query = {city:req.params.city,"type.mealtype":req.params.mealtype}
        sort = {cost:parseInt(req.query.cost)}
    }
    else{
        query = {city:req.params.city,"type.mealtype": req.params.mealtype}
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);
    })
})
