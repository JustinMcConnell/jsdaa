var Sort = Sort || {};

(function() {
  var InsertionSort = function(input) {
    var key, i, j;

    for (j = 1; j < input.length; j++) {
      key = input[j];
      i = j - 1;
      while (i >= 0 && input[i] > key) {
        input[i + 1] = input[i];
        i--;
      }
      input[i + 1] = key;
    }

    return input;
  }
  window.Sort.insertionSort = InsertionSort;
})();