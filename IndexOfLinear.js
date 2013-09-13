var MyArray = MyArray || {};

(function() {
  /*
   * Exercise 2.1-3
   * Consider the searching problem:
   * Input: A sequence of n numbers A = [a1, a2, ..., an] and a value v.
   * Output: An index i such that v = A[i] or the special value NIL if v does not appear in A.
   * Write pseudocode for linear search, which scans through the sequence, looking for v.
   * Using a loop invariant, prove that your algorithm is correct. 
   * Make sure that your loop invariant fulfills the three necessary properties.
   */
  var IndexOfLinear = function(a, v) {
    for (var i = 0, ic = a.length; i < ic; i++) {  // n + 1
      if (a[i] === v) {                            // n
        return i;                                  // 1
      }
    }
    return undefined;
  }

  window.MyArray.indexOfLinear = IndexOfLinear;
})();

// (n + 1) + n + 1
// 2n + 2
// n
// O(n)