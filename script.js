function fibonacci(num) {
  // Write your code here

  if (num === 1 || num === 2) {
    return num - 1;
  }

  const arr = [0, 1];
  let count = num - 2;

  while (count > 0) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    count--;
  }

  return arr[num - 1];
}

module.exports = fibonacci;
