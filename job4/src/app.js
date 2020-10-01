import {
    incrementQty,
    decrementQty,
    recalculatorSubtotal,
    bayar
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
var button = document.getElementById("decr");

button.onclick = function() {
    if (this.content.onclick == "max") {
        this.content.onclick == "maxd";
    }
}

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    subtotal.textContent = `Rp ${recalculatorSubtotal(price.value, qtyInput.value)};`
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value, onclick = "valid_max()");
    subtotal.textContent = `Rp ${recalculatorSubtotal(price.value, qtyInput.value)};`
});