/* Exercise 2.3
   ------------
   Let's look at another example at, currying, which converts a function f of two arguments
   into a function of one argument that partially applies f. Here again there's only one
   implementation that compiles. Write this implementation.
*/

function curry<A, B, C>(f: (a: A, b: B) => C): (a: A) => ((b: B) => C) {
  return a => b => f(a, b);
}
