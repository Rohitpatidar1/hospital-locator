const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rrohitpatidar1234:Rohit%40123@cluster0.b7oz7.mongodb.net/textdb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    // Yaha process.exit(1); hata diya hai
  }
};

module.exports = connectDB;
