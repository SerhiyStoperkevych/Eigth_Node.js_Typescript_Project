import express from 'express';
import bodyParser from 'body-parser';
import configureCors from './middlewares/corsMiddleware';
import messageRoutes from './routes/messageRoutes';
import userRoutes from './routes/userRoutes';

const configureApp = (app: express.Application) => {
  // Configure CORS for Express
  app.use(configureCors());

  app.use(bodyParser.json());

  // Use routes
  app.use(messageRoutes);
  app.use(userRoutes);
};

export default configureApp;
