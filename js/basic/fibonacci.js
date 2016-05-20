///////////////////
//nFib recursive//
/////////////////
function nFib(len, n, res) {
  if (!arguments[2]) {
    res = [0,1];
  }
  if (len === res.length) {
    return res;
  }
  var pushArr = 0;
  for (var i = res.length - 1; i >= res.length - n; i--) {
    if (res[i]) {
      pushArr += res[i];
    }
  }
  res.push(pushArr);
  return nFib(len, n, res);
}


//////////////////
//fib recursive//
////////////////
function fib(len, res) {
  if (!arguments[1]) {
    res = [0,1];
  }
  if (len === res.length) {
    return res;
  }
  res.push(res[res.length-1] + res[res.length-2])
  return fib(len, res);
}


///////////////////
//nFib for loops//
/////////////////
function nFib(len, n) {
  var ret = [0,1];
  for (var i = 2; i < len; i++) {
    var num = 0;
    for (var j = ret.length - 1; j >= ret.length - n; j--) {
      if (ret[j]) {
        num += ret[j];
      }
    }
    ret.push(num);
  }
  return ret;
}
