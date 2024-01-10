import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.log('Server Started on port 3000');
}
bootstrap();
