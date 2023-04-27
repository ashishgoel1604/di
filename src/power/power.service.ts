import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(
    watts: number,
    which_service: string,
    for_which_function: string,
  ) {
    console.log(
      `~~~~~~~~~~Suppying ${watts} watts of power to ${which_service} for executing ${for_which_function}~~~~~~`,
    );
  }
}
