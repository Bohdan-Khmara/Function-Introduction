/**
 * Cylinder area calculation function
 * @param {number} r
 * @param {number} h
 * @returns {number}
 */
function cylinderArea(r, h) {
    const PI = 3.14159265359;
    return 2 * PI * r * (h + r);
}

cylinderArea(2, 5);