export class FuelTank implements IFuelTank {
  public capacity: number;
  public level: number;
  constructor(dto: IFuelTank) {
    this.capacity = dto.capacity;
    this.level = dto.level;
  }
}
export interface ICar {
  licencePlate: string;
  size: string;
  fuel: IFuelTank;
}
export interface IFuelTank {
  capacity: number;
  level: number;
}

export class Car implements ICar {
  public licencePlate: string;
  public size: string;
  public fuel: FuelTank;
  constructor(data: ICar) {
    this.licencePlate = data.licencePlate;
    this.fuel = new FuelTank(data.fuel);
    this.size = data.size;
  }
}

export enum CarType {
  small = 'small',
  large = 'large',
}
