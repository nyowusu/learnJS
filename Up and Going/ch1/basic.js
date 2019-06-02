function printAmount(amount) {
    console.log("The amount is " + amount);
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

function multiplyAmount(amount, factor) {
    return amount * factor;
}

var amt = 99.99;

var modifiedAmt = 0;

printAmount(amt);

modifiedAmt = multiplyAmount(amt, 2);

modifiedAmt = formatAmount(modifiedAmt);

printAmount(modifiedAmt);