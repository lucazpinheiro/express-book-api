import { Request, Response, NextFunction } from 'express';
import logger from '../helpers/logger';

export default function requestLogger(req: Request, res: Response, next: NextFunction) {
  logger(`Request logged: ${req.method} ${req.path}`);
  next();
}
