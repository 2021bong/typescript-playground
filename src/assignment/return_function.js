const add = (a, b) => {
  if (a && b) {
    return a + b;
  } else {
    return (b) => {
      return a + b;
    };
  }
};

console.log(add(1, 2));
console.log(add(1)(2));
// console.log(add(1)(2, 3)(1, 2));
add(23)(6)(3)(5)(6)(3)(4)(6);
