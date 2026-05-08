const mongoose = require("mongoose");

async function connectDb() {
  const mongoUri = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
  } catch (error) {
    if (String(error.message).includes("querySrv")) {
      throw new Error(
        "Atlas DNS lookup failed (querySrv). Check internet/DNS or use Atlas standard (non-SRV) URI."
      );
    }
    throw error;
  }
}

module.exports = connectDb;