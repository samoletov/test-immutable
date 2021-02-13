import { Injectable } from '@nestjs/common';

import { Car, ICar } from './models/car';
import { Employee, IEmployee } from './models/employee';
import { IParking, Parking } from './models/parking';

@Injectable()
export class ParkingService {
  employees: Employee[];
  // per litre
  fuelPrice: number;
  refuelLevel: number;
  parkingPrice: {
    small: number;
    large: number;
  };

  constructor() {
    this.employees = [
      new Employee({
        name: 'A',
        commission: 0.11,
      }),
      new Employee({
        name: 'B',
        commission: 0.15,
      }),
    ];
    this.fuelPrice = 1.75;
    this.refuelLevel = 0.1;
    this.parkingPrice = {
      small: 25,
      large: 35,
    };
  }

  calculateWorkload(cars: Car[]): Parking[] {
    // sort employees by less commission
    const sortedEmployees = [...this.employees].sort((a, b) => a.commission - b.commission);
    const parkings = cars.map((car) => this.assignParking(car, sortedEmployees[0]));
    const sortedParkings = [...parkings].sort((a, b) => a.price - b.price);

    const reassignCount = Math.floor(sortedParkings.length / sortedEmployees.length);
    if (reassignCount) {
      let assignedCount = 0;
      // assign workload equally
      for (let pIndex = 0; pIndex < sortedParkings.length; pIndex++) {
        for (let eIndex = 1; eIndex < sortedEmployees.length; eIndex++) {
          sortedParkings[pIndex].employee = sortedEmployees[eIndex];
          assignedCount++;
          if (reassignCount === assignedCount) {
            break;
          }
        }
        if (reassignCount === assignedCount) {
          break;
        }
      }
    }

    return parkings;
  }

  assignParking(car: ICar, employee: IEmployee): IParking {
    const parking = new Parking(car);
    parking.price = this.parkingPrice[car.size];
    if (car.fuel.level <= this.refuelLevel) {
      parking.fuelAdded = car.fuel.capacity * (1 - car.fuel.level);
      parking.price += parking.fuelAdded * this.fuelPrice;
    }
    parking.employee = employee;
    return parking;
  }
}
