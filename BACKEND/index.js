const express = require('express');
import mongoose from 'mongoose'
import{connectDB} from './config/debugger.js'
const app = express();
connectDB()
const userSchema=new mongoose.Schema({name:{type:String,required:true},age:Number})
const User=mongoose.model('users',userSchema)
app.get('/', (req, res) => {
  res.send('welcome');
});

app.get('/get', (req, res) => {
  res.send('from get');
});

app.post('/post', (req, res) => {
  res.send('from post');
});

app.put('/put', (req, res) => {
  res.send('from put');
});

app.patch('/patch', (req, res) => {
  res.send('from patch');
});

app.delete('/delete', (req, res) => {
  res.send('from delete');
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
