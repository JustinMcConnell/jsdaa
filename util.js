function randomIntegerArray(size, max) {
  var a = new Array(size),
      max = max || 100;
  for (var i = a.length - 1; i >= 0; i--) {
    a[i] = Math.round(Math.random() * max);
  };
  return a;
}

function randomStringArray(size, len) {
  var a = new Array(size);
  for (var i = a.length - 1; i >= 0; i--) {
    a[i] = "";
    for (var j = len - 1; j >= 0; j--) {
      a[i] += String.fromCharCode(Math.round((Math.random() * 25) + 65));
    };
  };
  return a;
}

function randomDateArray(size) {
  var a = new Array(size);
  var now = new Date().getTime();
  for (var i = a.length - 1; i >= 0; i--) {
    a[i] = new Date(Math.round(Math.random() * now));
  };
  return a;
}