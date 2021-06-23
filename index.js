const express=require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const bodyParser = require('body-parser')

const app = express();



//Database Connection
const url = "mongodb://localhost/my_db";
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('open',()=>console.log('db connected'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))


//Setting up routes
app.use('/users',userRoutes)


//Listening on PORT
PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})
