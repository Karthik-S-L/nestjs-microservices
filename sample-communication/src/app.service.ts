import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { logger } from './config/logger';
import { getLoggerPrefix } from './utils/logger-debug.util';

@Injectable()
export class AppService {
  getHello(): string {
    logger.log(`${getLoggerPrefix()} `);
    return 'Hello World from communication microservice.!';
  }

  handleUserCreated(data: CreateUserEvent) {
    logger.log(`${getLoggerPrefix()} `);
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    // TODO: Email the user...
    return;
  }
}
