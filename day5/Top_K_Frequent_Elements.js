// Top K Frequent Elements


// var topKFrequent = function(nums, k) {

//     let bucket = {};
//     let newBucket = {};
//     let result = [];
//     for(let i = 0; i<nums.length; i++){
//        bucket[nums[i]] = (bucket[nums[i]] || 0) +1;
//     }
//     // console.log(bucket);

//     for(let key in bucket){
//         let freq = bucket[key]
//         if(Array.isArray(newBucket[bucket[key]])){
//             (newBucket[freq]).push(key)
//         }
//         else  {
//             newBucket[freq] = [key];

//         }
//     }
//     // console.log(newBucket)

//     let len =  Object.keys(newBucket).length;

//     for(let i=len;i>=0;i--){
//         if(Array.isArray(newBucket[i])){
//             result.push(...newBucket[i])
//         }
//         if(result.length >= k){
//             return result.slice(0,k)
//         }
//     }
//     return -1
// };

var topKFrequent = function (nums, k) {
    let map = {};
    let gb = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    for (let key in map) {
        let freq = map[key];
        if (Array.isArray(gb[freq])) {
            (gb[freq]).push(Number(key))
        } else {
            gb[freq] = [key]
        }
    }
    let keys = (Object.keys(gb));
    console.log(gb)

    for (let i = keys.length ; i >= 0; i--) {
         let index = keys[i]
        if (gb[index]) result.push(...gb[index]);
        if (result.length >= k) return result.slice(0,k)
    }
    return result

};

let nums = [6, 6, 6, 6, 6, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 1, 0, 0];
let k = 2;
console.log(topKFrequent(nums, k))