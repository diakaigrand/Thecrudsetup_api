const mongoose = require(`mongoose`);
require("dotenv").config("");
const Books = require('../models/books')
mongoose.connect(process.env.ATLAS_CONNECTION, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 
.then(console.log('Connected Successfully'))
.catch(err => {console.log(err)})
 
const getAllBooks = (req, res) => {
 Books.find({}, (err,book) => {
 if(err) {
 res.status(500).json(err);
 return;
 }
 console.log('found books: ', book)
 res.status(200).json(book)
 })
 
}
 
 module.exports={getAllBooks}