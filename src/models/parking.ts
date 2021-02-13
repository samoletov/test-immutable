import { ICar } from './car';
import { IEmployee } from './employee';

export interface IParking {
  employee: IEmployee;
  car: ICar;
  fuelAdded: number;
  price: number;
  cost: number;
}

export class Parking implements IParking {
  public employee: IEmployee;
  public car: ICar;
  public fuelAdded: number;
  public price: number;
  public cost: number;
  constructor(car: ICar) {
    this.car = car;
    this.fuelAdded = 0;
    this.price = 0;
    this.cost = 0;
  }
}
