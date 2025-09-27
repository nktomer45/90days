// Sort an array of 0s, 1s and 2s - Dutch National Flag Problem

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: [0, 0, 1, 1, 2, 2] has all 0s first, then all 1s and all 2s in last.

// Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
// Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

function sortd(arr) {
  let l = 0;
  let r = arr.length-1;
  let mid = 0;

  
  while (mid <=r) {
    if (arr[mid] == 0) {
      [arr[l], arr[mid]] = [arr[mid], arr[l]];
      l++;
      mid++;
    }
    else if (arr[mid] == 1) {
      mid++;
    } 

    else if (arr[mid]==2){
       [arr[mid], arr[r]] = [arr[r], arr[mid]];
      r--;
    }
    else {
      [arr[mid], arr[r]] = [arr[r], arr[mid]];
      r--;
    }
  }

  return arr;
}

console.log(sortd([0, 1, 0, 1,2,3,1,0]));
