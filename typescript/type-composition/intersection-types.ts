type A = { foo: Number };
type B = { bar: string };
tpe C = {
  foo?: number;
  baz: boolean;
};

type AnB = A & B;
type AnC = A & C;
type CnAorB = C & (A | B);