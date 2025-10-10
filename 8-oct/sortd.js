let ab = { '1': [1], '2': [2, 2,2],  '3': [3, 3],}


let b = Object.keys(ab).sort((a,b)=> a-b && ab[a].length-ab[b].length)

console.log(b) //[1,3,2]