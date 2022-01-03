/*
 * @Author: your name
 * @Date: 2022-01-03 16:44:16
 * @LastEditTime: 2022-01-03 17:37:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/normal.ts
 */
// 定义普通装饰器
function logClass(params: any) {
  console.log(params);

  // 动态扩展的属性
  params.prototype.apiUrl = 'xxx';
  // 动态扩展的方法
  params.prototype.run = function () {
    console.log('我是一个run方法');
  };
}

// 使用类装饰器（普通装饰器，无法传参）
@logClass
class HttpClient {
  constructor() {
    console.log('HttpClient constructor');
  }

  getData() {
    console.log('HttpClient getData');
  }
}

interface Decorator extends HttpClient {
  apiUrl: string;
  run: () => void;
}

const http = new HttpClient() as Decorator;
console.log(http.apiUrl);
http.run();
export default {};
