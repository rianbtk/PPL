const {
    incrementQty,
    decrementQty,
    recalculatorSubtotal
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
test('Jika harga 25000 dengan qty 2 adalah 50000', () => {
    expect(recalculatorSubtotal(25000, 2)).toBe(50000);
})