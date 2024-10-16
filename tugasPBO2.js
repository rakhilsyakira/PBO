class Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna) {
      this.nama = nama;
      this.jenis = jenis;
      this.nomor = nomor;
      this.kapasitas = kapasitas;
      this.warna = warna;
    }
  
    infoKapal() {
      return `Kapal ini bernama ${this.nama} yang berjenis kapal ${this.jenis} dengan nomor kapal ${this.nomor} dan memiliki kapasitas sekitar ${this.kapasitas} serta warna ${this.warna}.`;
    }
  
    deskripsiKapal() {
      return `Deskripsi umum kapal ${this.nama}.`;
    }
  }
  
  class Penumpang extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, penumpang) {
      super(nama, jenis, nomor, kapasitas, warna);
      let _penumpang = penumpang;
  
      // Metode untuk menambah penumpang
      this.tambahPenumpang = function (jumlah) {
        if (jumlah > 0 && jumlah + _penumpang <= this.kapasitas) {
          _penumpang += jumlah;
          console.log(`${jumlah} penumpang berhasil ditambahkan. Total penumpang: ${_penumpang}`);
        } else {
          console.log("Tidak bisa menambahkan penumpang, kapasitas penuh atau jumlah tidak valid.");
        }
      };
  
      // Getter untuk mendapatkan jumlah penumpang
      this.getPenumpang = function () {
        return _penumpang;
      };
    }
  
    deskripsiKapal() {
      return `Kapal ini adalah kapal penumpang bernama ${this.nama} dengan kapasitas ${this.kapasitas}.`;
    }
  
    infoPenumpang() {
      return `Kapal ${this.nama} saat ini membawa ${this.getPenumpang()} penumpang.`;
    }
  }
  
  class KapalBarang extends Kapal {
    constructor(nama, nomor, kapasitas, warna, barangMuatan) {
      super(nama, 'Kapal Barang', nomor, kapasitas, warna);
      this.barangMuatan = barangMuatan;
    }
  
    deskripsiKapal() {
      return `Kapal ini adalah kapal barang bernama ${this.nama} dengan muatan barang ${this.barangMuatan} ton.`;
    }
  }
  
  class KapalNelayan extends Kapal {
    constructor(nama, nomor, kapasitas, warna, hasilTangkap) {
      super(nama, 'Kapal Nelayan', nomor, kapasitas, warna);
      this.hasilTangkap = hasilTangkap;
    }
  
    deskripsiKapal() {
      return `Kapal ini adalah kapal nelayan bernama ${this.nama} yang menangkap ${this.hasilTangkap} ton ikan setiap harinya.`;
    }
  }
  
  class KapalPesiar extends Kapal {
    constructor(nama, nomor, kapasitas, warna, fasilitas) {
      super(nama, 'Kapal Pesiar', nomor, kapasitas, warna);
      this.fasilitas = fasilitas;
    }
  
    deskripsiKapal() {
      return `Kapal pesiar ${this.nama} menawarkan fasilitas seperti ${this.fasilitas}.`;
    }
  }
  
  class KapalPenelitian extends Kapal {
    constructor(nama, nomor, kapasitas, warna, peralatan) {
      super(nama, 'Kapal Penelitian', nomor, kapasitas, warna);
      this.peralatan = peralatan;
    }
  
    deskripsiKapal() {
      return `Kapal ini adalah kapal penelitian bernama ${this.nama}, dilengkapi dengan peralatan ${this.peralatan}.`;
    }
  }
  
  // Inisialisasi objek
  const kapalPenumpang = new Penumpang("Bintang Laut", "Feri", "12345", 100, "Biru", 80);
  const kapalBarang = new KapalBarang("Samudra Raya", "54321", 200, "Merah", 150);
  const kapalNelayan = new KapalNelayan("Jaya Ikan", "56789", 50, "Hijau", 5);
  const kapalPesiar = new KapalPesiar("Laut Mewah", "98765", 500, "Putih", "Kolam renang, Restoran, Spa");
  const kapalPenelitian = new KapalPenelitian("Discovery", "11223", 60, "Kuning", "Peralatan Oseanografi");
  
  // Tambahkan logging untuk memeriksa setiap kapal
  const daftarKapal = [kapalPenumpang, kapalBarang, kapalNelayan, kapalPesiar, kapalPenelitian];
  
  daftarKapal.forEach(kapal => {
    console.log(kapal.deskripsiKapal());
  });
  
  // Tambah penumpang dan cek hasilnya
  console.log("--- Menambahkan 10 penumpang ke kapal penumpang ---");
  kapalPenumpang.tambahPenumpang(10);
  console.log(kapalPenumpang.infoPenumpang());  // Menampilkan informasi setelah penambahan
  
  // Cek apakah kapasitas melebihi batas
  console.log("--- Coba tambahkan penumpang yang melebihi kapasitas ---");
  kapalPenumpang.tambahPenumpang(20); // Ini harus menampilkan pesan bahwa kapasitas penuh
  console.log(kapalPenumpang.infoPenumpang());  // Menampilkan informasi penumpang setelah percobaan

 // Cek apakah kapasitas melebihi batas
  console.log("--- Coba tambahkan penumpang yang melebihi kapasitas ---");
  kapalPenumpang.tambahPenumpang(20); 
  console.log(kapalPenumpang.infoPenumpang());  
  console.log("--- Informasi Kapal Barang ---");
  console.log(kapalBarang.deskripsiKapal());
  console.log(`Muatan saat ini: ${kapalBarang.barangMuatan} ton.`);

  console.log("--- Informasi Kapal Nelayan ---");
  console.log(kapalNelayan.deskripsiKapal());
  console.log(`Hasil tangkapan harian: ${kapalNelayan.hasilTangkap} ton ikan.`);

  console.log("--- Informasi Kapal Pesiar ---");
  console.log(kapalPesiar.deskripsiKapal());
  console.log(`Fasilitas yang tersedia: ${kapalPesiar.fasilitas}.`);

  console.log("--- Informasi Kapal Penelitian ---");
  console.log(kapalPenelitian.deskripsiKapal());
  console.log(`Peralatan penelitian yang ada: ${kapalPenelitian.peralatan}.`);
