export type Arity1<A, B> = (a: A) => B;

export type Arity2<A, B, C> = (a: A, b: B) => C;
  // | Arity1<A, Arity1<B, C>>;

export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D;
  // | Arity2<A, B, Arity1<C, D>>;

  const example1: Arity1<number, string> = (a: number): string => a.toString();
  const example2: Arity2<number, number, string> = (a: number, b: number): string => (a + b).toString();
  const example2curry = (a: number) => (b: number): string => (a + b).toString();

  const res1: string = example1(2);
  const res2: string = example2(2, 3);
  // const res2curry: string = example2curry(2)(3);
