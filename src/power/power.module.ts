import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], //providers made dependencies available inside same module
  exports: [PowerService], //exports made dependencies available to other,external modules
})
export class PowerModule {}
