import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { User } from '../interfaces/user.interface';

@Injectable()
export class JwtService {
  constructor(private readonly nestJwtService: NestJwtService) {}

  extractTokenFromHeader(authHeader: string): string | null {
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.split(' ')[1];
    }
    return null;
  }

  verifyToken(token: string): User {
    try {
      const decoded = this.nestJwtService.verify<User>(token);
      if (!decoded) {
        throw new BadRequestException('Authorization header not found');
      }
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
