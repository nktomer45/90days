/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function parition(arr,l,r){
    let i=0;
    let pivot = arr[r]
    for(let j=0; j<r; j++){
        if(arr[j] <=pivot) {
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
    }
        [arr[i],arr[r]] = [arr[r],arr[i]]
        return i;
}

function arrange(arr,k,l,r){
    if(!arr.length) return false;
    let index = parition(arr,l,r);
    if(index == k) return arr[index];
    else if(index < k) return arrange(arr,k,index+1,r);
    else return arrange(arr,k,l,index-1);
}

var findKthLargest = function(nums,k) {
    let l = 0;
    let r = nums.length-1;
    k = nums.length -k
    return arrange(nums,k,l,r)
}
let nums = [3,1,2,4], k = 2

// findKthLargest(nums,k)


class Solution {
    rotate(arr,l,r){
        let pivot = arr[r]
        let i = 0
        for(let j=0;j<r;j++){
            if(arr[j]<pivot){
                [arr[j],arr[i]]=[arr[i],arr[j]]
                i++;
            }
        }
        
        [arr[i],arr[r]] = [arr[r],arr[i]]
        return i;
    }
    
    quickSelect(arr,k,l,r){
        let index = this.rotate(arr,l,r)
        if(k==index){
            return arr[k]
        }else if(index>k){
            return this.quickSelect(arr,k,l,index-1)
        }else return this.quickSelect(arr,k,index+1,r)
        
    }
    nearlySorted(arr, k) {
       return this.quickSelect(arr,k,0,arr.length-1)
    }
}


const solution = new Solution()
console.log(solution.nearlySorted([6, 5, 3, 2, 8, 10, 9],3))