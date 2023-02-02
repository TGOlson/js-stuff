import { curry, curry2, curry3, curry4 } from ".";
import R from 'ramda';

// not really tests, more so checking that things typecheck

const add = (a: number, b: number): string => (a + b).toString();
const add3 = (a: number, b: number, c: number): string => (a + b + c).toString();
const add4 = (a: number, b: number, c: number, d: number): string => (a + b + c + d).toString();

export const addCurry2All: string = curry2(add)(1, 2);
export const addCurry2Curry: string = curry2(add)(1)(2);

const add3Curry = curry3(add3);
export const addCurry3All: string = add3Curry(1, 2, 3);
export const addCurry3Two: string = add3Curry(1, 2)(3);
export const addCurry3OneTwo: string = add3Curry(1)(2, 3);
export const addCurry3OneOne: string = add3Curry(1)(2)(3);

const add4Curry = curry4(add4);

export const four1: string = add4Curry(1, 2, 3, 4);
export const four2: string = add4Curry(1, 2, 3)(4);
export const four3: string = add4Curry(1, 2)(3, 4);
export const four4: string = add4Curry(1, 2)(3)(4);
export const four5: string = add4Curry(1)(2, 3, 4);
export const four6: string = add4Curry(1)(2, 3)(4);
export const four7: string = add4Curry(1)(2)(3, 4);
export const four8: string = add4Curry(1)(2)(3)(4);

export const five1: string = curry(add)(1, 2);
export const five2: string = curry(add)(1)(2);

export const five3: string = curry(add3)(1, 2, 3);
export const five4: string = curry(add3)(1, 2)(3);
export const five5: string = curry(add3)(1)(2, 3);
export const five6: string = curry(add3)(1)(2)(3);

export const five7: string = curry(add4)(1, 2, 3, 4);
export const five8: string = curry(add4)(1, 2, 3)(4);
export const five9: string = curry(add4)(1, 2)(3, 4);
export const five10: string = curry(add4)(1, 2)(3)(4);
export const five11: string = curry(add4)(1)(2, 3, 4);
export const five12: string = curry(add4)(1)(2, 3)(4);
export const five13: string = curry(add4)(1)(2)(3, 4);
export const five14: string = curry(add4)(1)(2)(3)(4);

// const f = curryN(4, add4)(1, 2);
const f = R.curry(add4);
