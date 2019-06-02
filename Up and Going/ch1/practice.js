const TAX_RATE = 0.09;
var phonePrice = 99.99;
var accessoryPrice = 9.99;
var spendingThreshold = 120.00;
var bankBalance = 302.44;

function calcPurchasePrice(amount, VAT) {
    return (amount + (amount * VAT));
}

function formatPurchasePrice(amt) {
    return "$" + amt.toFixed(2);
}

while (true) {
    var runningCost = phonePrice;


}