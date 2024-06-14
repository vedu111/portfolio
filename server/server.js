const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./models/Message');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contactMessages', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // const newMessage = new Message({ name, email, message });
    const mes = mongoose.model(vedant , Message);  
    const newMessage = new mes({ name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
