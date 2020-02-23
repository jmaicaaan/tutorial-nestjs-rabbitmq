import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  async getHello() {
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
      this.rabbitMQService.send('rabbit-mq-producer', {
        message: this.appService.getHello() + index,
      }),
    );
    Promise.all(pendingOperations);
    return 'Message sent to the queue!';
  }
}
