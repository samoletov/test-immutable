import { randomInt } from 'crypto';

import * as testData from '../test/data/test.json';
import { Car, ICar } from './models/car';
import { Employee } from './models/employee';
import { Parking } from './models/parking';
import { ParkingService } from './parking.service';

const getRandomPayload = () => {
  const data: ICar[] = [];
  // at least one car
  for (let i = 0; i < randomInt(100) + 1; i++) {
    data.push(
      new Car({
        licencePlate: `T${i}`,
        size: randomInt(10) > 5 ? 'large' : 'small',
        fuel: {
          capacity: randomInt(50),
          level: randomInt(100) / 100,
        },
      }),
    );
  }
  return data;
};

const checkWorkload = (employees: Employee[], workload: Parking[]) => {
  const check = [];
  employees.forEach((employee) => {
    check[employee.name] = {
      paid: 0,
      count: 0,
    };
  });
  workload.forEach((parking) => {
    check[parking.employee.name].paid += parking.price * parking.employee.commission;
    check[parking.employee.name].count++;
  });
  console.log('check', check);
  expect(check['A'].count).toBeGreaterThanOrEqual(check['B'].count);
  expect(check['B'].paid).toBeLessThanOrEqual(check['A'].paid);
};

describe('ParkingService', () => {
  describe('root', () => {
    it('should have defined settings', () => {
      const service = new ParkingService();
      expect(service.employees.length).toEqual(2);
      expect(service.fuelPrice).toEqual(1.75);
      expect(service.refuelLevel).toEqual(0.1);
      expect(service.parkingPrice).toEqual({
        small: 25,
        large: 35,
      });
    });
    it('should calculate workload equal and profitable using test data', () => {
      const service = new ParkingService();
      const workload = service.calculateWorkload(testData.map((car) => new Car(car)));
      console.log('workload', workload);
      checkWorkload(service.employees, workload);
    });

    // risky: failures should be checked manually
    it.skip('should calculate workload equal and profitable', () => {
      const service = new ParkingService();
      const payloads = [];
      // at leats one payload
      for (let i = 0; i < randomInt(10) + 100; i++) {
        payloads.push(getRandomPayload());
      }
      payloads.forEach((data) => {
        console.log('data', data);
        const workload = service.calculateWorkload(data);
        console.log('workload', workload);
        checkWorkload(service.employees, workload);
      });
    });
  });
});
