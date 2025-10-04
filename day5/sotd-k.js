class Solution {
    partiation(arr, l, r) {
        let i = l;
        let pivot = arr[r];
        
        for (let j = l; j < r; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[r]] = [arr[r], arr[i]];
        return i
    }

    quickSelect(arr, l, r) {
        if (l < r) {
            let pi = this.partiation(arr, l, r);
            this.quickSelect(arr, l, pi - 1);
            this.quickSelect(arr, pi + 1, r);
        }
    }

    solution(arr, k) {
        this.quickSelect(arr, 0, arr.length - 1);
        return arr;
    }

}

const solution = new Solution()
console.log(solution.solution([12, 43, 6, 6, 89, 3], 4))