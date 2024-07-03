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
    // return res.status(200).json({ message: "User created" });
    res.status(200).json({
      message: "User created successfully from baackend",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error creating new user:", error.message);
    res.status(500).json({ message: "Internal Server Error" }); // Respond with a server error
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Login Vayo" });
  } catch (error) {
    console.error("Error creating new user:", error.message);
    res.status(500).json({ message: "Internal Server Error" }); // Respond with a server error
  }
});

export default router;
