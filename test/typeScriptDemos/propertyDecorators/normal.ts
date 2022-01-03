/*
 * @Author: your name
 * @Date: 2022-01-03 17:18:39
 * @LastEditTime: 2022-01-03 17:30:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/propertyDecorators/normal.ts
 */
// 定义类装饰器
function logClass(params: string) {
  return function (target: any) {
    console.log({ target });
    console.log({ params });
  };
}

// 定义属性装饰器
function logProperty(params: any) {
  // target--->类的原型对象；attr--->传入的参数url
  return function (target: any, attr: any) {
    console.log({ target }, { attr });
    target[attr] = params;
  };
}

@logClass('xxxx')
class HttpClient {
  @logProperty('http://www.baidu.com')
  public url: any | undefined;
  constructor() {
    console.log('HttpClient');
    // this.url = 'my url';
  }
  getData() {
    console.log(this.url);
  }
}

const http = new HttpClient();
http.getData();
export default {};
