/* Exercise 2.5
   ------------
   Implement the higher-order function that composes two functions
*/

function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  return a => f(g(a));
}
