// var findClosestElements = function(arr, k, x) {
    
//     let heap =[];
//     for(let i=0;i<arr.length;i++){
        
//             let diff = Math.abs(arr[i]-x);
//             heap.push([diff,arr[i]]);
        
//     }
//     heap.sort((a,b) => a[0]-b[0]);
//     let bucket =[];
//     for(let j=0;j<k;j++){
//         if(j<=k)
//         bucket.push(heap[j][1]);
//     }
//     return bucket.sort((a,b)=>a-b);
// };


function findClosestElements(arr,k,x){
    let left =0;
    let right =arr.length-1;
    while(right-left+1>k){
        if(Math.abs(arr[left]-x)>Math.abs(arr[right]-x)){
            left ++;
            
        }else{
            right--
        }
    }
    return arr.slice(left, right+1)
}


let arr =[1, 2, 3, 4, 5], k = 3, x = 3;
console.log(findClosestElements(arr,k,x))