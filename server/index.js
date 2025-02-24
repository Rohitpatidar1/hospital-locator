const express = require("express");
const connectDB = require("./db.js");
const itemModel = require("./models/Item.js");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({ origin: "https://hospital-locator-hosptial.onrender.com" }));
connectDB();

app.get("/", async (req, res) => {
  const response = await itemModel.find();
  return res.json({ items: response });
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("app is running");
});
