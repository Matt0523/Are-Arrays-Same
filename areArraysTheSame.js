/**
 * * Are There Arrays The Same?
 * Takes two arrays and compares the numbers in order
 * If all the numbers are the same, returns true
 * If the arrays are differant, returns false
 */

 function areArraysSame(a, b) {
  var same = true;

  for (var i = 0; i < a.length; i++) {
      if (a.length !== b.length) {
          same = false;
          return same
      }
      if(a[i] !== b[i]){
          same = false;
          return same;
      }
  }
  console.log(same);
}

