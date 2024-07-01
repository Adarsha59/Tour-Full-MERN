import express from "express";
import User from "../model/user-model.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user
    await newUser.save();

    // Send a response with the new user's details
  } catch (error) {
    console.error(`Error creating new user: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" }); // Respond with a server error
  }
});

export default router;
