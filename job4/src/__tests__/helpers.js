/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty
} = require('../helpers')

test('Qty 1 ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty "1" ditambah 1 hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});