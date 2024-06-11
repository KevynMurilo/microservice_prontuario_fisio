import { Module } from '@nestjs/common';
import { HttpModule as HttpModuleAxios } from '@nestjs/axios';
import { HttpService } from './http.service';

@Module({
  imports: [HttpModuleAxios],
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule {}
