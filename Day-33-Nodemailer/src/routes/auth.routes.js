import {Router} from "express";
import {register} from "../controller/auth.controller.js";
import {registerValdator} from "../validators/auth.validtor.js";

const authRouter = Router();
authRouter.post("/register",registerValdator,register);

export default authRouter;