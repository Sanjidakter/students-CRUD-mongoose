import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post(
  '/login',
  (req, res, next) => {
    console.log('Login request received');
    next();
  },
  // validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);


export const AuthRoutes = router;
