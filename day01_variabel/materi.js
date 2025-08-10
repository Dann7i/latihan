// ===== materi.js: Variabel & Tipe Data =====

// Variabel dengan `const`
// Nilainya tidak bisa diubah
const namaDepan = "Wildan";
const tahunLahir = 2005;
console.log(`Nama depan: ${namaDepan}`);
console.log(`Tahun lahir: ${tahunLahir}`);

// Variabel dengan `let`
// Nilainya bisa diubah
let skor = 0;
console.log("Skor awal: " + skor);
skor = 100; // Nilainya diubah
console.log("Skor setelah diubah: " + skor);

// Contoh tipe data
let pesan = "Selamat belajar!";      // String (teks)
let angkaPi = 3.14;                  // Number (angka)
let isStudent = true;                // Boolean (benar/salah)

console.log("--- Tipe Data ---");
console.log("Pesan: " + typeof pesan);
console.log("Angka Pi: " + typeof angkaPi);
console.log("Status siswa: " + typeof isStudent);