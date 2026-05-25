import express from "express";
import authRouter from "./routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js";

const app = express();
app.use("/api/auth" ,authRouter);
import dotenv from "dotenv";
dotenv.config();



app.use(handleError);


export default app;