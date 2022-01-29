import { Injectable } from '@nestjs/common';
import { Log4jsLogger } from '@nestx-log4js/core';

@Injectable()
export class AppService {
  constructor(
      private readonly logger: Log4jsLogger,
  ) {}



  getHello(): string {
    return 'Hello World!';
  }

  sendPost(testLogs){
    // console.log(testLogs)
    this.logger.log(testLogs)
    // this.logger.log(this.testLog)
    // this.logger.log(this.testLog)
    return "200 ok";
  }
}
