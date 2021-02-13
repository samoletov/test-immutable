import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Parking service')
    .setDescription(
      `The service offers parking in addition to refueling to vehicles that require it, there are two employees who work on commission and get paid different rates.

      * Small cars pay a flat rate of $25 for parking and large vehicles pay $35.
      * Every car with 10% or less fuel, will be refueled to maximum capacity and charged the fuel amount in addition to the parking fee.
      * Employee A gets paid 11% commission over the final amount paid, while employee B gets paid 15%.
      * Fuel has a fixed rate of $1.75/litre.`,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
