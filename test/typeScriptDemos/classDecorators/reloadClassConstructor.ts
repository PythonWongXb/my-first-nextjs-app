/*
 * @Author: your name
 * @Date: 2022-01-03 16:43:52
 * @LastEditTime: 2022-01-03 17:57:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-first-nextjs-app/test/typeScriptDemos/reloadClassConstructor.ts
 */
// 定义装饰器工厂
function logClass(target: any) {
  const orginTarget = new target(); // 把类的构造函数作为参数传入，并修改构造函数
  console.log('orginTarget', orginTarget.apiUrl);
  return class extends target {
    // 修改当前类的构造函数
    apiUrl: any = '我是在装饰器里面修改后的apiUrl';
    constructor() {
      // super 有意义吗，没有意义。
      super();
      // this.apiUrl = '我是构造函数里面的apiUrl';
      // console.log(this.apiUrl);
      // this.apiUrl = '1234124';
    }
    // 修改方法
    getData() {
      this.apiUrl = this.apiUrl + '=====';
      console.log(this.apiUrl);
    }

    specialFunc() {
      console.log(null);
    }
  };
}

@logClass
class HttpClient {
  public apiUrl: string | undefined = 'init apiUrl';
  constructor(name: string) {
    console.log(name, 'init');
    console.log('orgin HttpClient constructor');
    this.apiUrl = '我是构造函数里面的apiUrl';
  }
  getData() {
    console.log(this.apiUrl);
  }

  specialFunc() {
    console.log('special');
  }
}

const http = new HttpClient('me');
http.getData();
export default {};
