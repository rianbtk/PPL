const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculatorSubtotal(price, qty) {
    return price * qty;
}

function bayar(price) {
    return price(bayar);
}

module.exports = {
    incrementQty,
    decrementQty,
    recalculatorSubtotal
};