const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a,b) {
	let res=0;;
    for (let i = a; i <=b; i++) {
        res+=i;
    }
    return res;
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  let res=1;
    for (let i = 1; i <=n; i++) {
        res*=i;
    }
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
