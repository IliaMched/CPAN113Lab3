let Array = [11, "cat", 23, "dog", 42];
let start = Array[0];
let middle = Array[1];
let last = Array[4];
console.log(Array.length);


console.log(Array.push("fish"));
console.log(Array.unshift(1));
console.log(Array.shift(1));

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
  }

  const [first, second, ...rest] = Array;
  console.log(first);
  console.log(second);
  console.log(rest);