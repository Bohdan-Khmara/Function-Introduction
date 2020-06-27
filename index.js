/**
 * Triangle Check Function
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function triangleCheck(a, b, c) {
    if (a > (b + c)) {
        return false;
    } else if (b > (a + c)) {
        return false;
    } else if (c > (a + b)) {
        return false;
    } else return true;

}

triangleCheck(10, 5, 5);

