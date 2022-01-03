/*
 * @Author: your name
 * @Date: 2022-01-03 17:59:10
 * @LastEditTime: 2022-01-03 19:48:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/functionParamsDecorators/normal.ts
 */
function logParams(params: any) {
  return function (target: any, methodName: any, paramsIndex: any) {
    // prototype object . constructor ==> function object
    const instance = new target.constructor();
    console.log({ instance: instance.url });
    console.log(1, { params });
    console.log(2, target);
    console.log(3, methodName);
    console.log(4, paramsIndex);

    // 增加属性
    target.apiUrl = params;
  };
}

class HttpClient {
  public url: any | undefined = 'init url';
  constructor() {
    console.log('constructor');
  }

  getData(otherParams: any, @logParams('uuid') uuid: any) {
    console.log('我是getData里面的方法,uuid=', uuid, otherParams);
  }
}

const http: any = new HttpClient();

http.getData('others', 123456);
console.log(5, http.apiUrl);
export default {};
