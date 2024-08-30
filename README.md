# Manajemen Pengguna dengan Prinsip Single-responsibility (SRP)

Proyek ini adalah implementasi dari Prinsip Single-responsibility (SRP) menggunakan React.js dan Tailwind CSS. Aplikasi ini dikembangkan sebagai bagian dari mata kuliah **Rekayasa Perangkat Lunak Berbasis Komponen (RPLBK)**. Aplikasi ini berfungsi sebagai sistem manajemen pengguna sederhana di mana pengguna dapat ditambahkan dan ditampilkan, dengan penyimpanan data melalui local storage.

## Deskripsi Proyek

Proyek ini mengikuti SRP dengan membagi aplikasi menjadi tiga komponen utama, masing-masing dengan tanggung jawab tunggal:

- **`App`**: Mengelola state pengguna dan mengoordinasikan interaksi antara komponen `AddUser` dan `UserList`. Bertanggung jawab untuk memuat dan menyimpan data pengguna ke `localStorage`.
- **`UserList`**: Menampilkan daftar pengguna. Menerima daftar pengguna dan fungsi hapus sebagai props dari komponen `App` dan menampilkan daftar pengguna dengan opsi hapus untuk setiap pengguna.
- **`AddUser`**: Menangani penambahan pengguna baru. Mengelola state form dan mengirimkan data pengguna baru kembali ke komponen `App` melalui fungsi callback.

Aplikasi ini juga memanfaatkan `localStorage` untuk menyimpan data pengguna secara lokal, sehingga data tetap ada bahkan setelah halaman di-refresh atau browser ditutup. Antarmuka pengguna dibangun menggunakan React.js dan distyling dengan Tailwind CSS untuk memberikan desain yang responsif dan modern.

Proyek ini dikembangkan oleh **Verry Kurniawan** (NIM: 21120122130062) sebagai bagian dari mata kuliah **Rekayasa Perangkat Lunak Berbasis Komponen (RPLBK)**.

## Fitur

- **Prinsip Single-responsibility**: Setiap komponen memiliki tanggung jawab tunggal, membuat basis kode lebih modular, mudah dipelihara, dan diuji.
- **Desain Responsif**: Aplikasi ini menggunakan Tailwind CSS untuk styling, memastikan antarmuka pengguna responsif di berbagai ukuran layar.
- **Penyimpanan Lokal**: Data pengguna disimpan di `localStorage`, memungkinkan data tetap ada meskipun setelah halaman di-refresh atau browser dimulai ulang.
- **Penghapusan Pengguna**: Pengguna dapat dihapus dari daftar, dan perubahan ini akan tercermin di `localStorage`.

## Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/princeofverry/RPLBK-Clean-Code-Single-responsibility-Principle.git

   ```

2. Masuk repository:
   ```bash
   cd RPLBK-Clean-Code-Single-responsibility Principle

   ```
3. Install Depedencies:

   ```bash
   npm install

   ```

4. Masuk repository:
   ```bash
   npm run dev
   ```
