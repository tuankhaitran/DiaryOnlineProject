require('./config/config');
require('./models/db');
require('./config/passportConfig');
const express = require('express');

const Post = require('./models/post');
// const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex= require('./routes/index.router')

var app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api',rtsIndex);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });
  
app.post("/api/posts", (req, res, next) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        postId: createdPost._id
      });
    });
  });

  app.put("/api/posts/:id", (req, res, next) => {
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content
    });
    Post.updateOne({ _id: req.params.id }, post).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  });
  
    app.get("/api/posts", (req, res, next) => {
        Post.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully!",
            posts: documents
        });
    });
  });
  

  app.get("/api/posts/:id", (req, res, next) => {
    Post.findById(req.params.id).then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    });
  });
  //Delete
  
  
    app.delete("/api/posts/:id", (req, res, next) => {
        Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
        });
  });

//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
module.exports=app;
//start server
app.listen(process.env.PORT, () => 
    console.log(`Server started at post: ${process.env.PORT}`)
)



