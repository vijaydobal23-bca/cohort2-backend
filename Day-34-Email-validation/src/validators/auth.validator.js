import {body,validationResult} from "express-validator";

export function validate(req ,res ,next){
    const error = validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({
        error:error.array()
      })
    }
  }




export const registerValdator = [
  body("username").trim().notEmpty().withMessage("Username is required").isLength({min:3,max:30}).withMessage("Length should be >3 and <30").matches(/^[a-zA-Z0-9_]+$/).withMessage("username must contains only letters"),

  body("email").trim().isEmpty().withMessage("Email is reqiuid").isEmail().withMessage("Email is invalud"),

  body("password").notEmpty().withMessage("password is required").isLength({min:6,max:12}).withMessage("password must be betwqen 6 and 12 chaacters"),

  validate

] 


export const loginValidator = [
  body("email").trim().notEmpty().withMessage("Email is required").
  isEmail().withMessage("Please provide a valid email"),
  body("password").notEmpty().withMessage("Password is requied"),
  validate,
]; 