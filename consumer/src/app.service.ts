import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  mySuperLongProcessOfUser(data: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`done processing data: ${JSON.stringify(data)}`);
        resolve();
      }, 10000);
    });
  }
}
