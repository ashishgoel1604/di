import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}
  @Get('/addition')
  getSum() {
    const dataToAdd = this.diskService.getData();
    const sum = this.cpuService.compute(dataToAdd.num1, dataToAdd.num2);
    return `Sum of ${dataToAdd.num1}+${dataToAdd.num2} = ${sum}`;
  }
}
