import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../common/jwt/jwt.service';

@Injectable()
export class IsFisioterapeuta implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    const token = this.jwtService.extractTokenFromHeader(authHeader);
    if (!token)
      throw new UnauthorizedException('Token não encontrado ou inválido');

    try {
      const decoded = this.jwtService.verifyToken(token);

      if (!decoded.Role || !decoded.Role.includes('Fisioterapeuta')) {
        throw new UnauthorizedException(
          'Acesso negado: função de Fisioterapeuta necessária',
        );
      }

      req.user = decoded;
      next();
    } catch (error) {
      throw new UnauthorizedException(error.response);
    }
  }
}
