/* Exercise 2.4
   ------------
   Implement uncurry, wich reverses the transformation of curry. Note that since =>
   associated to the right, A => (B => C) can be written as A => B => C
*/

function uncurry<A, B, C>(f: (a: A) => (b: B) => C): (a: A, b: B) => C {
  return (a, b) => f(a)(b);
}
