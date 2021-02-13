import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { Car } from './models/car';
import { CarDto, ParkingDto } from './parking.dto';
import { ParkingService } from './parking.service';

@Controller()
@ApiTags('parking')
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(private readonly appService: ParkingService) {}

  @Post('workload')
  @ApiOperation({
    summary: 'Calculate workload',
    description: 'The workload equally between the two employees in a way that favours profit.',
  })
  @ApiOkResponse({
    description: 'Workload',
    type: ParkingDto,
    isArray: true,
  })
  @ApiBody({
    description: 'Workload',
    type: CarDto,
    isArray: true,
  })
  workload(@Body() cars: CarDto[]): ParkingDto[] {
    return this.appService
      .calculateWorkload(cars.map((carDto) => new Car(carDto)))
      .map((parking) => new ParkingDto(parking));
  }
}
