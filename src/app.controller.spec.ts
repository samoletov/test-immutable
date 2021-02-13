import { Test, TestingModule } from '@nestjs/testing';

import * as testData from '../test/data/test.json';
import { AppController } from './app.controller';
import { ParkingDto } from './parking.dto';
import { ParkingService } from './parking.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ParkingService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should calculate workload', () => {
      const workload = appController.workload(testData);
      expect(workload[0]).toBeInstanceOf(ParkingDto);
    });
  });
});
