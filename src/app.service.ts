import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '爱你，宝贝～我最爱茜茜啦～';
  }
}
