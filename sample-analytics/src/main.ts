import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { logger } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
  logger.log(`Analytics application started in port 3001`);
}
bootstrap();
