const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri='mongodb+srv://tyresewest25:Ty11082001!@cluster0.ues6hiu.mongodb.net/Capstone-Project'
mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});