/*
 * @Author: your name
 * @Date: 2022-01-03 16:43:52
 * @LastEditTime: 2022-01-03 16:59:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/reloadClassConstructor.ts
 */
// 定义装饰器工厂
function logClass(params: string) {
  return function (target: any) {
    console.log('target：', target);
    console.log('params：', params);

    target.prototype.apiUrl = params;
  };
}

// 使用类装饰器：装饰器工厂,可传参(相当于把hello给了params,下面这个类给了target)
@logClass('http:www.baidu.com')
class HttpClient {
  constructor() {
    console.log('constructor');
  }

  getData() {
    console.log('getData');
  }
}

interface Decorator extends HttpClient {
  apiUrl: string;
  run: () => void;
}

const http = new HttpClient() as Decorator;
console.log(http.apiUrl);
export default {};
