// Sort Array by Increasing Frequency

let nums = [2,3,1,3,2];

function frequencySort(nums) {
    let bucket = {};
    for (let i = 0; i < nums.length; i++) {
        if (bucket[nums[i]]) {
            (bucket[nums[i]]).push(nums[i]);
        } else {
            bucket[nums[i]] = [nums[i]];
        }
    }
    bucket ={ '1': [1], '2': [2, 2,2],  '3': [3, 3],}
    console.log(bucket)
    let keys = Object.keys(bucket).sort((a, b) =>  bucket[a].length - bucket[b].length || b-a);
    console.log(keys)
    let result = [];
    for (let i of keys) {
        result.push(...bucket[i]);
    }
    return result;
}

console.log(frequencySort(nums))