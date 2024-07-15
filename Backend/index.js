import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import fashionroute from "./route/fashion.route.js"
import cors from "cors"

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDB;

console.log("MongoDB URL:", URL);

app.use(express.json());

// Connect to MongoDB
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/MensKurta', fashionroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
