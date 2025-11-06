// FUNCTION -> Kumpulan blok kode yang dirancang untuk menajalankan tugas tertentu dan dapat reusable

// 1. KONSEP DASAR FUNCTION
// -. DECLARATION FUNCTION
let nama = "Renday";
function Oreg() {
  console.log(nama);
  nama = "Ucup";
  console.log(nama);
  console.log("Sebungkus Oreg nya", nama);
}

// -. CALLING FUNCTION (INVOKE)
Oreg();

// for (i = 0; i < 10; i++) {
//   Oreg();
// }

let kolamBerenangUmum = "Komplek WPH";

function rumahDicky() {
  console.log(kolamBerenangUmum);
  let kolamBerenangDicky = "Kolam Dicky";
  console.log(kolamBerenangDicky);
  return kolamBerenangDicky;
}

function rumahHuda() {
  console.log(kolamBerenangUmum);
  console.log(rumahDicky());
  let kolamBerenang = "Kolam Huda";
  console.log(kolamBerenang);
}

function rumahDaniel() {
  console.log(kolamBerenangUmum);
  let kolamBerenang = "Kolam Daniel";
  console.log(kolamBerenang);
}

// rumahDicky();
// rumahDaniel();
rumahHuda();

/*
    PATTERN :
    function namaFungsi(){
        // Kumpulan kode tertentu
    }
    namaFungsi()
*/

// 2. FUNCTION DENGAN PARAMETER DAN ARGUMENT
let a = 10;
let b = 20;

// function tambah() {
//   console.log(a + b);
// }
// tambah();

/*
    PATTERN :
    function namaFungsi(parameter){
        // Code here
    }

    namaFungsi(argument)
*/
function tambah(a, b, nama = "Renday") {
  console.log(a + b, nama);
}
tambah(a, b, "Ucup");
tambah(10, 15);
tambah(10000000, 1234567);

// 3. RETURN VALUE
function kali(a, b) {
  return a * b;
}

let hasil1 = kali(10, 2);
let hasil2 = kali(12, 35);
console.log(hasil1);
console.log(hasil2);

function testHuda() {
  return "HUDAAAA";
}

console.log(testHuda());
