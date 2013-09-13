var Sort = Sort || {};

(function() {
  var MergeSort = function(A, p, r) {
    if (p < r) {
      var q = Math.floor((p + r) / 2);
      MergeSort(A, p, q);
      MergeSort(A, q + 1, r);
      Merge(A, p, q, r);
    }

    return A;
  }

  var Merge = function(A, p, q, r) {
    var n1 = q - p + 1,
        n2 = r - q,
        L = new Array(n1 + 1),
        R = new Array(n2 + 1);
    
    for (var i = 0; i < n1; i++) {
      L[i] = A[p + i];
    }
    for (var j = 0; j < n2; j++) {
      R[j] = A[q + j + 1];
    }

    L[n1] = Number.POSITIVE_INFINITY;
    R[n2] = Number.POSITIVE_INFINITY;

    i = 0;
    j = 0;
    for (var k = 0; k < r; k++) {
      if (L[i] <= R[j]) {
        A[k] = L[i];
        i++;
      } else {
        A[k] = R[j];
        j++;
      }
    }

    return A;
  }
  //console.log([1, 3, 5, 2, 4, 6]);
  //console.log(Merge([1, 3, 2, 4, 4, 6], 0, 1, 3));

  var MergeSort = function(items) {
    if (items.length < 2) {
      return items;
    }

    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);

    return Merge(MergeSort(left), MergeSort(right));
  }

  var Merge = function(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    return result.concat(left.slice(il).concat(right.slice(ir)));
  }
  window.Sort.mergeSort = MergeSort;
})();