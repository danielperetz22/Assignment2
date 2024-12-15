import express from 'express';
const app = express();
import dotenv from "dotenv"
dotenv.config();
import mongoose from 'mongoose';
const postRoutes = require('./Routes/PostsRoutes');
const CommentRoutes = require('./Routes/CommentRoutes');
const port = process.env.PORT;


app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/post', postRoutes);
app.use('/comment', CommentRoutes);

mongoose.connect('mongodb://localhost:27017/mydb',)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});



