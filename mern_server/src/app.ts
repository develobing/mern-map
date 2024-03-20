import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import ErrorHandler from './middlewares/errorHandler';

/**
 * Load environment variables from .env file, where API keys and passwords are configured
 */
dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

app.use(ErrorHandler);

export default app;
