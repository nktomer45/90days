var nextGreaterElement = function(nums1, nums2) {
    let res =[];
    for(let i=0;i<nums1.length;i++){
        let index = nums2.indexOf(nums1[i]);
        if(index!=-1){
            for(let j=index;j<nums2.length;j++){
                if(nums2[j] && nums2[j]>nums1[i]){
                    res.push(nums2[j])
                }
            }
            if(res.length-1 !== i){
                res.push(-1)
            }
        }else{
            res.push(-1)
        }
    }
    return res
};

let  nums1 = [1,3,5,2,4], nums2 = [6,5,4,3,2,1,7];

console.log(nextGreaterElement(nums1,nums2))