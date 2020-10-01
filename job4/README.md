# Pengujian Shop Sedehana

## Berikut cara sederhana menguji sebuah sistem
<br>

### Yang di siapkan

![](img/clone.png)
`Link Github ` [https://github.com/hndr91/kuis1-ppl.git]

`Clone di direktori lalu buka di terminal | code . |`
![](img/dr.png)

`Jika sudah maka akan terbuka seperti gambar di bawah ini `

![](img/mv.png)

## Kalau sudah kita mulai proses testing
### Langkah langkahnya sebagai berikut
    Install nmp modul
![](img/npm.png)

    Maka akan muncull modul node_modules
![](img/pr.png)

    Kita coba running
![](img/npmstart.png)

Setelah kita running kita buka
[http://localhost:1234/] maka akan keluar tampilan sebagai berikut
![](img/hasil1.png)

### Permasalahan

**Bug yang ditemukan:**

- [ ] Bug pada button **+**
- [ ] Bug pada button **-**
- [ ] Bug pada button **Ok**
- [ ] Bug pada button **Bayar**
- [ ] Bug pada qtt **+**
- [ ] BUg pada qtt **-**
- [ ] Bug pada **Subtotal**

**Penyelesaian Bug**

- [x] Bug pada button **+**

    Pertama kita ubah dulu logic dari code yang ada di helpers sepeti gambar di bawah ini
![](img/plus.png)

- [x] Bug pada button **-**

    Pertama kita ubah dulu logic dari code yang ada di helpers sepeti gambar di bawah ini
![](img/min.png)

- [x] Bug pada button **Ok**
- [x] Bug pada button **Bayar**
- [x] Bug pada qtt **+**
- [x] BUg pada qtt **-**
- [x] Bug pada **Subtotal**

<br>

### Testing NPM

`Testing Logic Plus & Minus yang di Parse (Dipaksa menjadi integer)`![](img/testing.png)