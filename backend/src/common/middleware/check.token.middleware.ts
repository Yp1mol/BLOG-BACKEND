import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CheckTokenkMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (req.path.includes('auth/login')) {
        return next()
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
       throw new UnauthorizedException('No token provided');
    }
    next();
  }
}