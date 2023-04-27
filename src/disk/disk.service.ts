import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log(
      'Disk service requesting 12 watts of power for reading data...',
    );
    this.powerService.supplyPower(12, 'disk_service', 'data_read_operation');
    return {
      num1: 10,
      num2: 20,
    };
  }
}
