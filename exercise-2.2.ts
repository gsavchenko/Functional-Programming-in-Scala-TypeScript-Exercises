/* Exercise 2.2
   ------------
   Implement isSorted, which checks whether an Array[a] is sorted according to a given comparison function:
   def isSorted[A] (as: Array[A], ordered: (A, A) => Boolean): Boolean
*/

function isSorted<A>(as: Array<A>, ordered: (a: A, b: A) => Boolean): Boolean {
  const loop = (index: number) => {
    if(index >= as.length - 1) return true;
    else if(ordered(as[index], as[index + 1])) return loop(index + 1);
    else return false;
  }

  return loop(0);
}
