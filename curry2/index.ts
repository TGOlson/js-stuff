import R from 'ramda';
import { Function } from '../types/function';
import { Length } from '../types/length';

// https://github.com/millsp/ts-toolbelt/blob/master/sources/Function/Curry.ts#L112

// Note: this doesn't work
// It needs to take into accounts 'gaps' (aka. diff the params passed in vs the ones remaining)
// ts-toolbelt does this in the examples at the bottom

type Curry<F extends Function> = 
  <A extends any[] = Parameters<F>, R extends any = ReturnType<F>>
  (...args: A) => Length<A> extends 0 ? R : Curry<F> 

// (...args: A) => Curry<F>;

function curry<F extends Function>(fn: F): Curry<F> {
  const numArgs = fn.arguments.length;

  return (...args) => {
    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return curry(fn);
    }
  };
}

const add = (a: number, b: number): string =>  (a + b).toString();

// const f = curryN(4, add4)(1, 2);
const f = R.curry(add);
const g = f(1);

const h = curry(add);
const i = h(1);

// export type Curry<F extends Function> 
//   = 
//   <L extends List, G extends List = GapsOf<L, Parameters<F>>, R extends any = Return<F>>
//   (...args: Cast<L, Gaps<Parameters<F>>>) 
//   => Length<G> extends 0 ? R : Length<G> extends 1 ? Curry<(...args: G) => R> & ((...args: G) => R) : Curry<(...args: G) => R>;

// export type Curry<F extends Function> =
//     <
//         P extends Gaps<Parameters<F>>,
//         G extends List = GapsOf<P, Parameters<F>>,
//         R extends any = Return<F>
//     >(...p: Gaps<Parameters<F>> | P) =>
//         // handles optional parameters
//         RequiredKeys<G> extends never
//         ? R
//         : Curry<(...p: G) => R>
