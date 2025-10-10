var kClosest = function(points, k) {
    points.sort((a,b)=>(a[0]**2 +a[1]**2)-(b[0]**2+b[1]**2));
    return points.slice(0,k)
};


let points = [[3,3],[5,-1],[-2,4]], k = 2

console.log(kClosest(points,k))