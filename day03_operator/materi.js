// ===== materi.js: Tipe Data Lanjutan =====

// Tipe Data Dasar
const nama = "Wildan";      // String
const umur = 20;            // Number
const isReady = true;       // Boolean

// Tipe Data Objek (data terstruktur)
const buku = {
  judul: "Belajar JavaScript",
  penulis: "Wildan",
  tahun: 2024
};

// Tipe Data Array (daftar data)
const hobbies = ["coding", "design", "gaming"];

// Tipe Data Khusus
let kota = null;            // Nilai sengaja dikosongkan
let pekerjaan;              // Belum diberi nilai, jadi `undefined`

// Menampilkan hasil dan tipe datanya
console.log("Nama: " + typeof nama);
console.log("Umur: " + typeof umur);
console.log("Buku: " + typeof buku);
console.log("Hobbies: " + typeof hobbies); // Catatan: `typeof` array adalah 'object'
console.log("Kota: " + typeof kota);       // Catatan: `typeof` null adalah 'object'
console.log("Pekerjaan: " + typeof pekerjaan);