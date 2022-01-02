/*
 * @Author: your name
 * @Date: 2022-01-02 15:13:47
 * @LastEditTime: 2022-01-02 16:01:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 7999;
  await app.listen(port);
  console.log(`listening http://localhost:${port}`);
}
bootstrap();
