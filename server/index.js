const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./models/Item.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://hospital-locator-hosptial.onrender.com" }));


connectDB();

// Routes
app.get("/", async (req, res) => {
  try {
    const response = await itemModel.find();
    return res.json({ items: response });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Port setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
