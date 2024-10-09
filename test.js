const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {

  it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });
 
  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });
 
  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });
 
  it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });
 
  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });

    // Latihan 1: Test case tambahan
  it('seharusnya mengembalikan angka negatif saat mengurangkan angka yang lebih besar dari angka yang lebih kecil', function() {
    expect(kurang(2, 5)).to.equal(-3);
});

  it('seharusnya mengembalikan error saat membagi 0 dengan angka negatif', function() {
    expect(bagi(0, -3)).to.equal(0);
});
  
   // Kasus negatif untuk fungsi tambah dan kali
   it('seharusnya mengembalikan error saat menambahkan string dengan angka', function() {
    expect(() => tambah('string', 2)).to.throw("Input harus berupa angka");
  });

  it('seharusnya mengembalikan error saat menambahkan null dengan angka', function() {
    expect(() => tambah(null, 2)).to.throw("Input harus berupa angka");
  });

  it('seharusnya mengembalikan error saat menambahkan undefined dengan angka', function() {
    expect(() => tambah(undefined, 2)).to.throw("Input harus berupa angka");
  });

  it('seharusnya mengembalikan error saat mengalikan string dengan angka', function() {
    expect(() => kali('string', 2)).to.throw("Input harus berupa angka");
  });

  it('seharusnya mengembalikan error saat mengalikan null dengan angka', function() {
    expect(() => kali(null, 2)).to.throw("Input harus berupa angka");
  });

  it('seharusnya mengembalikan error saat mengalikan undefined dengan angka', function() {
    expect(() => kali(undefined, 2)).to.throw("Input harus berupa angka");
  });
});