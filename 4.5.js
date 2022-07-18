// Point A
let x1 = 1
let y1 = 1
// Point B
let x2 = 2
let y2 = 2

/**Calcule la distance entre 2 points */
function getDistance(x1, y1, x2, y2){
    let x = x1 - x2;
    let y = y1 - y2;

    return Math.sqrt(x * x + y * y);
}
console.log (getDistance(x1, y1, x2, y2))