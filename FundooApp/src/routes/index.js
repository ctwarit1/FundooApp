import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import noteRoute from './note.route';
import jwt from 'jsonwebtoken'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  
  router.use('/users', userRoute);

  router.use('/notes', noteRoute);

  return router;
};

export default routes;
