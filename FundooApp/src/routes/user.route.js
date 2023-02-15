import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

import { authNew, userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to register/create a new user
router.post('/register', newUserValidator, userController.userRegister);

//route to login
router.post('/login',  userController.login);

// route for forget password
router.post('/forgetPass', userController.forgetPass);

// // route for reset password
router.put('/resetPass/:token', authNew, userController.resetPass);

export default router;
