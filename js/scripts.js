function getTriangleArea(a, h) {
    if ( (a <= 0) || (h <= 0) ) {
        console.log("Niepoprawne dane")
    } else {
        return(a*h/2)
    }
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 10);
var triangle3Area = getTriangleArea(7, 8);