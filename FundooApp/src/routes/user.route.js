import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

import jwt from 'jsonwebtoken';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to register/create a new user
router.post('/register', newUserValidator, userController.userRegister);

//route to login
router.post('/login',  userController.login);

export default router;
