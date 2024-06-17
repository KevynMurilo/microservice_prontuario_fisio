import { Controller, Get, Headers } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Controller('jwt')
export class JwtController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('verify')
  verifyToken(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      return { error: 'Authorization header not found' };
    }

    const token = this.extractTokenFromHeader(authHeader);
    if (!token) {
      return { error: 'Token not found' };
    }

    try {
      const verified = this.jwtService.verifyToken(token);
      return { verified };
    } catch (error) {
      return { error: error.message };
    }
  }

  private extractTokenFromHeader(authHeader: string): string | null {
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.split(' ')[1];
    }
    return null;
  }
}
