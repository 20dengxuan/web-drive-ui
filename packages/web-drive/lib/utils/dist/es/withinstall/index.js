"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
exports.default = index;