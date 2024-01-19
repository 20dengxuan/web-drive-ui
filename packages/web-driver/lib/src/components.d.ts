import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WButton: typeof components.Button;
  }
}
export {};


// 注意:当用户使用组件库的时候需要让用户在tsconfig.json中配置types:["easyest/lib/src/components"]才会出现提示效果
// "compilerOptions": {
//   //...
//   "types": ["easyest/lib/src/components"]
// },