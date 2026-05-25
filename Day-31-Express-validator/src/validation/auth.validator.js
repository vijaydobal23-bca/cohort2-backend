import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({
    errors: errors.array(),
  });
};
export const registerValidation = [
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("Username is required")
    .bail()
    .isString()
    .withMessage("Username should be string"),
  body("email").isEmail().withMessage("Email should be valid"),

  body("password").isLength({ min: 6 }).withMessage("ength should be > 6"),

  (req, res, next) => {
    validate(req, res, next);
  },
];
