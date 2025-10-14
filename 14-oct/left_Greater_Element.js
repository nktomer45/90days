// Closest greater or same value on left side for every element in array

function leftSide(arr) {

    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let diff = Infinity;
        for(let j=0;j<i;j++){
            if(arr[j]>=arr[i]) diff = Math.min(diff,arr[j]-arr[i]);
        }
        if(diff !== Infinity){
            arr[i] = arr[i] +diff;
        }
       
    }

    return arr;
}

let arr = [10, 5, 11, 6, 20, 12];

console.log(leftSide(arr))