import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser"
import { config } from 'dotenv';
config();

// Initialize express app
const app = express();

// Middleware to parse request body
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URL, {
});

// Check if MongoDB connection is successful
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define route to handle POST requests from frontend
// app.post('/your/api/endpoint', async (req, res) => {
//     const inputData = new Data({
//       data: req.body.data,
//     });
//     // Check if inputData exists
//     if (!inputData.data) {
//       return res.status(400).json({ error: 'Input data is required' });
//     }
//     // Do something with the received data, e.g., save it to the database
//     try {
//       await inputData.save();
//       return res.status(200).json({ message: 'Received data successfully', data: inputData });
//     } catch (error) {
//       console.error('Error saving data:', error);
//       return res.status(500).json({ error: 'Error saving data' });
//     }
//   });

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});