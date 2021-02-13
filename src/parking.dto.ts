import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';

import { CarType, ICar, IFuelTank } from './models/car';
import { IParking } from './models/parking';

export class FuelTankDto implements IFuelTank {
  @ApiProperty()
  capacity: number;
  @ApiProperty()
  level: number;
}

export class CarDto implements ICar {
  @ApiProperty()
  licencePlate: string;
  @ApiProperty()
  @ApiProperty({ enum: CarType, enumName: 'CarType' })
  size: string;
  @ApiProperty()
  @ValidateNested()
  fuel: FuelTankDto;
}

export class ParkingDto {
  @ApiProperty()
  employee: string;
  @ApiProperty()
  licencePlate: string;
  @ApiProperty()
  fuelAdded: number;
  @ApiProperty()
  price: number;
  constructor(data: IParking) {
    this.employee = data.employee.name;
    this.licencePlate = data.car.licencePlate;
    // nice format
    this.fuelAdded = Number(data.fuelAdded.toFixed(2));
    this.price = Number(data.price.toFixed(2));
  }
}
