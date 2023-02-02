export function curry<A, B, C>(fn: (a: A, b: B) => C): {
  (a: A, b: B): C;
  (a: A): (b: B) => C;
}

export function curry<A, B, C, D>(fn: (a: A, b: B, c: C) => D): {
  (a: A, b: B, c: C): D;
  (a: A, b: B): (c: C) => D;
  (a: A): {
    (b: B, c: C): D;
    (b: B): (c: C) => D;
  }
}

export function curry<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E): {
  (a: A, b: B, c: C, d: D): E;
  (a: A, b: B, c: C): (d: D) => E;
  (a: A, b: B): {
    (c: C, d: D): E;
    (c: C): (d: D) => E;
  }

  (a: A): {
    (b: B, c: C, d: D): E;
    (b: B, c: C): (d: D) => E;
    (b: B): {
      (c: C): (d: D) => E;
      (c: C, d: D): E;
    }
  }
}

export function curry(fn: Function): Function {
  const num = fn.arguments.length;

  switch (num) {
    case 1: return fn;
    case 2: return curry2(fn as ((a: any, b: any) => any));
    case 3: return curry3(fn as (a: any, b: any, c: any) => any);
    case 4: return curry4(fn as (a: any, b: any, c: any, d: any) => any);
    default: throw new Error('Unsupported curry num: ' + num);
  }
}

// Note: overloaded type signature are used here to allow for calls with partial arguments...
// this provides for a better type signature vs using 'any', at the expense of a little clunkier implementation
export function curry2<A, B, C>(fn: (a: A, b: B) => C): {
  (a: A, b: B): C;
  (a: A): (b: B) => C;
}

export function curry2<A, B, C>(fn: (a: A, b: B) => C) {
  return (a: A, b?: B) => {
    if (b === undefined) {
      return (b: B) => fn(a, b);
    } else {
      return fn(a, b);
    }
  }
}

export function curry3<A, B, C, D>(fn: (a: A, b: B, c: C) => D): {
  (a: A, b: B, c: C): D;
  (a: A, b: B): (c: C) => D;
  (a: A): {
    (b: B, c: C): D;
    (b: B): (c: C) => D;
  }
}

export function curry3<A, B, C, D>(fn: (a: A, b: B, c: C) => D) {
  return(a: A, b?: B, c?: C) => {
    if (b === undefined) {
      return curry2((b: B, c: C) => fn(a, b, c));
    } else if (c === undefined) {
      return (c: C) => fn(a, b, c);
    } else {
      return fn(a, b, c);
    }
  }
}

export function curry4<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E): {
  (a: A, b: B, c: C, d: D): E;
  (a: A, b: B, c: C): (d: D) => E;
  (a: A, b: B): {
    (c: C, d: D): E;
    (c: C): (d: D) => E;
  }

  (a: A): {
    (b: B, c: C, d: D): E;
    (b: B, c: C): (d: D) => E;
    (b: B): {
      (c: C): (d: D) => E;
      (c: C, d: D): E;
    }
  }
}

export function curry4<A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D) => E) {
  return(a: A, b?: B, c?: C, d?: D) => {
    if (b === undefined) {
      return curry3((b: B, c: C, d: D) => fn(a, b, c, d));
    } else if (c === undefined) {
      return curry2((c: C, d: D) => fn(a, b, c, d));
    } else if (d === undefined) {
      return (d: D) => fn(a, b, c, d);
    } else {
      return fn(a, b, c, d);
    }
  }
}
