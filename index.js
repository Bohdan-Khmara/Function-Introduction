/**
 * function of checking the multiplicity of one number to another
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {boolean}
 */
function checkMultiplicity(firstNumber, secondNumber) {
    let operation = firstNumber % secondNumber;
    if (operation === 0) {
        return true;
    } else {
        return false;
    }

}

checkMultiplicity(15, 3);

