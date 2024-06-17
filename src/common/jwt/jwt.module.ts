import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule as JwtModuleBib } from '@nestjs/jwt';
import { JwtController } from './jwt.controller';

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
  controllers: [JwtController],
})
export class JwtModule {}
