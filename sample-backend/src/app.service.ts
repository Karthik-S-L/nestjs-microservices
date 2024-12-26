import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';
import { getLoggerPrefix } from './utils/logger-debug.util';
import { logger } from './config/logger';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    logger.log(`${getLoggerPrefix()} `);
    return 'Hello World from backend microservice!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    logger.log(`${getLoggerPrefix()} `);
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }

  getAnalytics() {
    logger.log(`${getLoggerPrefix()} `);
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
