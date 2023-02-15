import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import jwt from 'jsonwebtoken';


// function for registration
export const userRegister = async (req, res, next) => {
  try {
    const data = await UserService.userRegister(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'User Registered successfully'
    });
  } catch (error) {
    next(error);
  }
};

// function for login page
export const login =async(req,res,next) => {
  try
  {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message:data 
    });
  } catch (error) { 
    next(error);
  }
};
/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};


// forgetpassword
// export const forgetPass = async (req, res) => {
//   try {
//     const data = await UserService.forgetPass(req.body);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'Email has been sent'
//     });
//   } catch (error) {
//     res.status(HttpStatus.NOT_FOUND).json({
//       code: HttpStatus.NOT_FOUND,
//       message: `Email not found`

//     });
//   }
// };

// // reset  password
// export const resetPass = async (req, res, next) => {
//   try {
//     const data = await UserService.resetPass(req.params.token, req.body);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'Password Changed'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// forgetpassword
export const forgetPass = async (req, res) => {
  try {
    const data = await UserService.forgetPass(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Email has been sent'
    });
  } catch (error) {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message: `Email doesn't exist`

    });
  }
};

// reset password 
export const resetPass = async (req, res, next) => {
  try {
    const data = await UserService.resetPass(req.params.token, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Password has been changed'
    });
  } catch (error) {
    next(error);
  }
};