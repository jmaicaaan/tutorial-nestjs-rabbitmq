import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://xnfbgxgg:7EhYkk-2a_hsScQWmyyuOlZ33v7U-bjx@wasp.rmq.cloudamqp.com/xnfbgxgg'
      ],
      queue: 'rabbit-mq-nest-js',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1
    }
  });

  await app.listenAsync();
}

bootstrap();
