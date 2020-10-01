import {
    incrementQty,
    decrementQty,
    recalculatorSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    subtotal.textContent = `Rp ${recalculatorSubtotal(price.value, qtyInput.value)};`
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value, onclick = "valid_max()");
    subtotal.textContent = `Rp ${recalculatorSubtotal(price.value, qtyInput.value)};`
});