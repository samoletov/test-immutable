import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ParkingService } from './parking.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ParkingService],
})
export class AppModule {}
