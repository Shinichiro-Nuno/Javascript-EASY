const array = [1, 2, 3, 4, 5];

const result = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++)
  total += arr[i];
  return total;
}

console.log(result(array));