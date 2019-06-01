/**
 * functions in JS
 */

const TAX_RATE = 0.09;

function calcFinalAmount(amount, VAT) {
    // calculate tax and add back to amount
    return (amount + (amount * VAT)).toFixed(2);
}

var amount = 99.99;

console.log("Before tax amount is: " + amount);

amount = calcFinalAmount(amount, TAX_RATE);

console.log("Tax of " + TAX_RATE * 100 + "% applied: " + amount);