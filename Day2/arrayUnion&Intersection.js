// Union and Intersection of Two Unsorted Arrays - Complete Tutorial
// Union of two arrays is an array having all distinct elements that are present in either array whereas Intersection of two arrays is an array containing distinct common elements between the two arrays. In this post, we will discuss about Union and Intersection of unsorted array

// #union
// Input : a[] = {1, 2, 3, 2, 1}, b[] = {3, 2, 2, 3, 3, 2}
// Output : {3, 2, 1}

// #Intersection
// Input: a[] = {1, 2, 1, 3, 1},  b[] = {3, 1, 3, 4, 1}
// Output: {1,  3}

function Union(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < Math.max(arr2.length, arr1.length); i++) {
    if (arr2[i] && !arr.includes(arr2[i])) {
      arr.push(arr2[i]);
    }
    if (arr1[i] && !arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return arr;
}

// console.log(Union([1, 2, 1, 3, 1],[3, 1, 3, 4, 1]))

function Intersection(arr1, arr2) {
  let arr = [];

//   for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
//     if (arr1.includes(arr2[i]) && !arr.includes(arr2[i])) {
//       arr.push(arr2[i]);
//     }
//   }

// arr = arr1.filter((value)=>arr2.includes(value) && !arr.includes(value))

arr = arr1.reduce((acc,value)=>{
    if(arr2.includes(value) && !acc.includes(value)){
        acc.push(value)
    }
    return acc
},[])

  return arr;
}

console.log(Intersection([1, 2, 1, 3, 1], [3, 1, 3, 4, 1]));
