// Find the nth fibonacci number.

// Fibonacci numbers are defined as:

//     Fib(0): 0
//     Fib(1): 1
//     Fib(N): Fib(N-1) + Fib(N-2), for N >= 2

// First 10 fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 

const nThFibonacci = (n) => {
  if(n === 0) {
    return 0;
  }

  let ptr1 = 0;
  let ptr2 = 1;
  for(let i = 1; i < n; i++) {
    let temp = ptr2;
    ptr2 = ptr1 + ptr2;
    ptr1 = temp;
  }

  return ptr2;
};

console.log(nThFibonacci(9));