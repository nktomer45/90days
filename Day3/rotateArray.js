// #Rotate Array By One

// Given an array, the task is to cyclically right-rotate the array by one.
// Examples:
// Input: arr[] = [1, 2, 3, 4, 5];
// Output: [5, 1, 2, 3, 4];
// Input: arr[] = [2, 3, 4, 5, 1];
// Output: [1, 2, 3, 4, 5];

// # solution First by in-build function
// function rotate(arr, r) {
//   let i = 0;
//   while (i < r) {
//     let lastValue = arr.pop();
//     arr.unshift(lastValue);
//     i++
//   }
//   return arr;
// }

// #Solution Second without in-build function

function rotate(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= i) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }

  return arr;
}

// console.log(rotate([1, 2, 3, 4, 5]));


function rotateNth(arr,r) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= r) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }

  return arr;
}

console.log(rotateNth([1, 2, 3, 4, 5],2));
