var MyArray = MyArray || {};
  /*
   * Consider the problem of adding two n-bit binary integers, stored in two n-element arrays A and B.
   * The sum of the two integers should be stored in binary form in an (n + 1)-element array C.
   * State the problem formally and write pseudocode for adding the two integers.
   */

(function() {
  var BinaryAdd = function(a, b) {
    var c = new Array(a.length + 1),
        carry = 0,
        sum = 0;

    for (var i = a.length - 1; i >= 0; i--) {
      sum = a[i] + b[i] + carry;
      if (sum == 3) {
        c[i + 1] = 1;
        carry = 1;
      } else if (sum == 2) {
        c[i + 1] = 0;
        carry = 1;
      } else if (sum == 1) {
        c[i + 1] = 1;
        carry = 0;
      } else {
        c[i + 1] = 0;
        carry = 0;
      }
    };

    if (carry) {
      c[0] = 1;
    } else {
      c = c.slice(1);
    }

    return c;
  };

  var BinaryAdd2 = function(a, b) {
    var aNum = parseInt(a.join(""), 2);
    var bNum = parseInt(b.join(""), 2);
    var cNum = aNum + bNum;
    return cNum.toString(2).split("");
  }

  window.MyArray.binaryAdd = BinaryAdd;
  window.MyArray.binaryAdd2 = BinaryAdd2;
})();
