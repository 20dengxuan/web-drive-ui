import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WButton: typeof components.Button;
  }
}
export {};