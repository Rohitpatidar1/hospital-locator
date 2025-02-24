const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://rrohitpatidar1234:Rohit%40123@cluster0.b7oz7.mongodb.net/textdb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
