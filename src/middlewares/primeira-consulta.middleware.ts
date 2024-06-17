import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PrimeiraConsultaMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (
      !user ||
      !user['Primeira Consulta?'] ||
      user['Primeira Consulta?'] !== 'True'
    ) {
      throw new UnauthorizedException(
        'É necessário realizar a primeira consulta',
      );
    }

    next();
  }
}
