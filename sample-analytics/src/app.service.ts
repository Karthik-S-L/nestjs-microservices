import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { logger } from './config/logger';
import { getLoggerPrefix } from './utils/logger-debug.util';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    logger.log(`${getLoggerPrefix()} `);
    return 'Hello World from analytics microservice!';
  }

  handleUserCreated(data: CreateUserEvent) {
    logger.log(`${getLoggerPrefix()}handlerUserCreated - ANALYTICS-> ${data} `);
    console.log('handlerUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    logger.log(`${getLoggerPrefix()} `);
    return this.analytics;
  }
}
