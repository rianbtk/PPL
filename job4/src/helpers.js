const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculatorSubtotal(price, qty) {
    return price * qty;
}

module.exports = {
    incrementQty,
    decrementQty,
    recalculatorSubtotal
};