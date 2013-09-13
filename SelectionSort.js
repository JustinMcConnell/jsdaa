var Sort = Sort || {};

(function() {
  /*
   * Loop invariant:
   * At the start of the outer for loop, the subarray a[0 .. i] consists of the i smallest elements
   * in the array a, and a[0 .. i] is in sorted order.
   * The runtime of this algorithm is O(n^2)
   */
  var SelectionSort = function(a) {
    var smallest = 0; // index of smallest number         // 1

    for(var i = 0, ic = a.length - 1; i < ic; i++) {      // n + 1
      smallest = i;                                       // n
      
      for (var j = i + 1, jc = a.length; j < jc; j++) {   // ((n * (n + 1)) / 2) - 1
        if (a[smallest] > a[j]) {                         // ((n * (n + 1)) / 2)
          smallest = j;                                   // ((n * (n + 1)) / 2)
        }
      }

      var temp = a[i];                                    // n
      a[i] = a[smallest];                                 // n
      a[smallest] = temp;                                 // n
    }

    return a;                                             // 1
  };

  window.Sort.selectionSort = SelectionSort;
})();

// 1 + (n + 1) + n + (((n * (n + 1)) / 2) - 1) + (((n * (n + 1)) / 2)) + (((n * (n + 1)) / 2)) + n + n + n + 1
// 2 + 5n + 3(((n * (n + 1)) / 2))
// 2 + 5n + 3((n^2 / 2) + (n / 2))
// 2 + 5n + 3/2(n^2) + 3/2n
// 2 + 13/2n + 3/2(n^2)
// n + n^2
// n^2