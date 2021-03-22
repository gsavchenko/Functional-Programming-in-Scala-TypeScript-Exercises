/* Exercise 2.1
   ------------
   Write a recursive function to get the nth Fibonacci number. The first two Fibonacci numbers are 0 and 1.
   The nth number is always the sum of the previous two - the sequence begins 0, 1, 1, 2, 3, 5. Your
   defenition should use a local tail-recursive function.
*/

function fib(n: number): number {
  if(n == 0) {
    return 0;
  }
  else if(n == 1) {
    return 1;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibTailRecursive(n: number): number {
  const tailRecursiveLoop = (n: number, prev: number, curr: number): number =>
    (n == 0)
      ? curr
      : tailRecursiveLoop(n - 1, prev + curr, prev);

  return tailRecursiveLoop(n, 1, 0);
}