/*
 * @Author: your name
 * @Date: 2022-01-02 15:13:47
 * @LastEditTime: 2022-01-03 17:33:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/src/app.controller.ts
 */
import {
  Controller,
  Get,
  HttpCode,
  Req,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  url: string;
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  getHello(@Req() request: any): string {
    console.log(request);
    return this.appService.getHello();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
