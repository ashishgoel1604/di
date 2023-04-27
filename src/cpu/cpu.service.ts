import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(num1: number, num2: number) {
    console.log(
      'Cpu service requesting 10 watts of power for compute function...',
    );
    this.powerService.supplyPower(10, 'cpu_service', 'compute_function');
    return num1 + num2;
  }
}
