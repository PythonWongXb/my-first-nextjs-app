/*
 * @Author: your name
 * @Date: 2022-01-03 18:10:59
 * @LastEditTime: 2022-01-03 18:15:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/propertyDecorators copy/normal.ts
 */
function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log({ target, methodName, desc });

    // 扩展属性
    target.apiUrl = 'xxx';
    // 扩展方法
    target.run = function () {
      console.log('run');
    };

    // 修改装饰器的方法，把装饰器方法里面传入的参数都改为string类型
    // (1)保存当前的方法
    const oMethod = desc.value;
    // (2)改写方法
    desc.value = function (...args: any[]) {
      // 调用未改写的方法
      oMethod.apply(this, args);
      console.log(args);
    };
  };
}

class HttpClient {
  public url: any | undefined;
  constructor() {
    console.log('constructor');
  }

  @get('http://www.baidu.com')
  getData(...arr: any[]) {
    console.log(arr, '我是getData里面的方法');
  }
}

const http: any = new HttpClient();
console.log(http.apiUrl);
http.getData('张三', 25);
http.run();
export default {};
