import {Router} from "express";
import {login, register, verifyEmail} from "../controller/auth.controller.js";
import { loginValidator, registerValdator } from "../validators/auth.validator.js";


const authRouter = Router();
authRouter.post("/register",registerValdator,register);
authRouter.get("/verify-email", verifyEmail);
authRouter.post("/login", loginValidator, login)
export default authRouter;