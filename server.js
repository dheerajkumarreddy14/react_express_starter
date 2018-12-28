const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/weather-app';

       mongoose.connect(mongoUrl,{useNewUrlParser: true}) 
   .then(() => {
     console.log('Successfully connected to the database');
   })
   .catch(err => {
     console.log('Could not connect to the database.', err);
     process.exit();
   });


const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    city: { type: String },
    temperature: { type: Number},
    });
const weather = mongoose.model('weathers', weatherSchema);
 //-----------GET ALL USERS-------
 app.get('/weathers', function(req, res){
    console.log(req, "req")
   weather.find({}).then((data) => {
    console.log("data", data) 
    res.send(data);
       })
  })
  
  //---------GET USER BY NAME---------
  app.get('/weathers/:id', function(req, res) {
    weather.findById(req.params.id).then(function(c) {
     res.send(c);
    })
   });
    
   
   //-----------CREATE----------
     app.post('/weathers/add', function(req, res){
   console.log('hi', req.body);
   weather.create(req.body).then(function(c){
      res.send(c);
    })
   });
   
   //------------UPDATE---------
   app.put('/weathers/update/:id', (req, res) => {
    weather.findByIdAndUpdate({_id:req.params.id},req.body).then(()=> {
      weather.findOne({id:req.params.id}).then((c)=>{
        res.send(c);
      })
    })
   })
    
   //---------DELETE----------- 
   app.delete('/weathers/delete/:id', function(req, res){
    weather.findByIdAndRemove({_id:req.params.id}).then(function(c){
      res.send(c);
    })
    console.log('deleted sucessfully');
   })
  

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);