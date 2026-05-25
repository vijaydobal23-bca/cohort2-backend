import { Router } from "express";
import {registerUser} from "../controller/auth.conroller.js";

const authRouter = Router();
authRouter.post("/register" ,registerUser);
export default authRouter;  