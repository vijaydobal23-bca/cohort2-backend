require("dotenv").config();

const app = require("./src/app");
const connectDb = require("./src/db");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`App is starting on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);   
  }
}

startServer(); 