import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule as JwtModuleBib } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModuleBib.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
