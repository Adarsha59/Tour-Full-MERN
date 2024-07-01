import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import galleryRoute from "./routes/gallery-route.js";
import blogRoute from "./routes/blog-route.js";
import userRoute from "./routes/user-route.js";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

async function connectToServer() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to server");
  } catch (error) {
    console.log("Failed to connect", error);
  }
}
// Middleware to parse JSON request body
app.use(express.json());
//router routes
app.use("/gallery", galleryRoute);
app.use("/blog", blogRoute);
app.use("/user", userRoute);

connectToServer();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
