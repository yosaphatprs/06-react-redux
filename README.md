## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720031 |
| Nama |  Josafat Pratama Susilo |
| Kelas | TI - 3A |

### Praktikum 1

Setelah melakukan install Redux dan Bootstrap, kemudian menulis kode yang ada dalam Praktikum 1, serta mengikuti langkah-langkah di dalamnya, maka hasilnya adalah sebagai berikut:
![Praktikum 1](/assets-report/01a.png)

Kemudian jika button diklik, akan muncul modal seperti berikut:
![Praktikum 1](/assets-report/01b.png)

### Praktikum 2

Soal

1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?

- Maka state akan tersimpan bahwa telah login atau isLogin = true.

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?

- Jika tidak menggunakan method tersebut maka tidak ada error.

Hasil:
![Praktikum 2](/assets-report/02a.png)

Hasil:
![Praktikum 2](/assets-report/02b.png)

### Praktikum 3

Hasil:
![Praktikum 3](/assets-report/3.png)

### Tugas

1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan
2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect menghapus baris 3, dan baris 9-11, apa yang akan terjadi?
3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?
4. Apakah store pada nextjs bisa menyimpan banyak redux reducer?
5. Jelaskan kegunaan dari file store.js!
6. Pada file pages/login.tsx, apa maksud dari kode ini ?
const { isLogin } = useSelector((state) => state.auth);
7. Pada file pages/counter.tsx, apa maksud dari kode ini?
const {totalCounter} = useSelector((state) => state.counter);

### Jawaban

1. Kegunaan dari kode tersebut adalah untuk mengimport useEffect dari react.
2. Jika tidak menggunakan useEffect maka tidak akan ada efek apapun.
3. Karena class merupakan keyword di JavaScript, sehingga untuk menghindari konflik, maka diganti menjadi className.
4. Ya, store pada nextjs bisa menyimpan banyak redux reducer.
5. Kegunaan dari file store.js adalah untuk membuat store Redux.
6. Maksud dari kode tersebut adalah untuk mengambil state isLogin dari store Redux.
7. Maksud dari kode tersebut adalah untuk mengambil state totalCounter dari store Redux.