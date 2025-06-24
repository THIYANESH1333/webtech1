import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import cors from 'cors';

const app = express(); 
app.use(cors());  
app.use(express.json());

connectDB();

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});


const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

app.get('/get/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'No user found with that ID' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/post', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/put/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, 
    });
    if (!updatedUser) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'Data updated', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.patch('/patch/:id', async (req, res) => {
  try {
    const patchedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!patchedUser) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'User partially updated', user: patchedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const methodFind = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(methodFind);

app.listen(4000, () => {
  console.log('✅ Server running at http://localhost:4000');
});
