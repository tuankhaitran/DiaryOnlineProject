// const express= require('express');
// // const bodyParser= require('body-parser');
// const cors= require('cors');

// const PORT=27017;

// const app= express();

// const mongoose = require('mongoose')

// mongoose.Promise = Promise
// mongoose.connect('mongodb://localhost:27017/diaryuserdb')
// .then(() => console.log("Mongoose up"))
// // app.use(bodyParser.urlencoded());

// // app.use(bodyParser.json());
// app.use(express.json());

// app.use(cors());

// const User = require('./models/user')

// app.get('/', function(req,res){
//   res.send("Hello from server");
// })

// app.post('/login', async (req,res) => {
//   const {username, password} = req.body
//   const resp= await User.findOne({username, password})
//   if(!resp){
//     // User login is incorrect
//     console.log("incorrect details")
//   }
//   else {
//     // make a session and set user to logged in
//     console.log("Logging you in")
//   }
// })
// app.post('/registration', function(req, res){
//   console.log(req.body);
//   res.status(200).send({"message": "Data received"});
// })
// app.listen(PORT, function(){
//   console.log("Server running on mongodb://localhost:" + PORT);
// })





const express= require('express');
// const bodyParser= require('body-parser');
const cors= require('cors');

const PORT=3000;

const app= express();


// app.use(bodyParser.urlencoded());

// app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.get('/', function(req,res){
  res.send("Hello from server");
})
app.post('/registration', function(req, res){
  console.log(req.body);
  res.status(200).send({"message": "Data received"});
})
app.listen(PORT, function(){
  console.log("Server running on localhost:" + PORT);
})
