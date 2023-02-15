import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const  userdata  = await jwt.verify(bearerToken, process.env.SECRET_KEY );
    // res.locals.user = user;
    // res.locals.token = bearerToken;
    req.body.userId = userdata.email;
    next();
  } catch (error) {
    next(error);
  }
};

export const authNew = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const  userdata  = await jwt.verify(bearerToken, process.env.New_Secret );
    // res.locals.user = user;
    // res.locals.token = bearerToken;
    req.body.userId = userdata.email;
    next();
  } catch (error) {
    next(error);
  }
};
