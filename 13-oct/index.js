class Solution {

    arrange(arr, l, r) {
        let pivot = arr[r];
        let j = l;
        for (let i = l; i < r; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                j++;
            }
        }

        [arr[r], arr[j]] = [arr[j], arr[r]];
        return j;
    }

    quickSelect(arr, l, r) {
        if (l < r) {
            let index = this.arrange(arr, l, r);
            this.quickSelect(arr, l,index - 1);
            this.quickSelect(arr, index + 1,r);
        }
    }

    sumBetweenTwoKth(A, N, K1, K2) {
        let l = 0;
        let r = N ;
        this.quickSelect(A, l, r);
        let result = 0;
        for (let i = 0; i < N; i++) { 
            if (i > K1-1 && i < K2-1) {
                result += A[i];
            }
        }
        return result;
    }
}


let N = 6
let A = [20, 8, 22, 4, 12, 10, 14]
let K1 = 3, K2 = 6;
const sol = new Solution();
console.log(sol.sumBetweenTwoKth(A, N, K1, K2))