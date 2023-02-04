import { Function } from "./function";

// using inline typing for args and return type
// this is probably better, but I think the concepts in apply2 are more generalizable
function apply<A extends any[], R>(args: A, fn: (...args: A) => R): R {
  return fn(...args);
}

// using extraction types for parameters and return type
function apply2<F extends Function>(args: Parameters<F>, fn: F): ReturnType<F> {
  return fn(...args);
}

function add(a: number, b: number): string {
  return (a + b).toString();
}

apply([1, 2], add);
apply2([1, 2], add);
