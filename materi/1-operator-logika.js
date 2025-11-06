// OPERATOR LOGIKA -> Menghasilkan nilai boolean (true/false)
/*
    Macam-macam operator logika :
    1. OR (||) -> ketika ada 1 saja kondisi true, maka semua kondisi akan menjadi true
    2. AND (&&) -> ketika semua kondisi true, maka kondisi true
    3. NOT (!) -> membalikkan nilai

    Notes :
    Operand -> value atau variabel (object yang dioperasikan oleh operator)
    Truthy : true, console.log(), "ucup", 1, ....
    Falsy : false, 0, "", undefined, null, ....
*/

// 1. OR (||) -> Mengembalikan nilai pertama truthy, atau nilai terakhir jika semua falsy
/*
    Pattern :
    let result = a || b
*/
console.log("" || "daniel");
console.log("" || 0);
console.log(undefined || null);

let hourOR = 12;
let isWeekend = true;

if (hourOR < 10 || hourOR > 18 || isWeekend) {
  console.log("Kantornya sudah tutup");
} else {
  console.log("Kantor buka");
}

// 2. AND (&&) -> Mengembalikan nilai pertama falsy, atau nilai terakhir jika semua truthy
console.log("Kaka" && 0);
console.log("Kaka" && 1);
console.log(null && undefined);
console.log(1 && 0);

let hourAND = 12;
let minute = 40;

if (hourAND == 12 && minute == 30) {
  console.log("ini jam 12.30");
} else {
  console.log("jam lain");
}

// 3. NOT (!)
console.log(!true);
let isAmSmart = false;
console.log(!isAmSmart);

let pintar = true;
console.log(!pintar);

let bodoh = true;
console.log(!bodoh);

let nama = "ucup";
console.log(!!nama);

// NOTES : (!!) -> untuk melakukan konversi implicit ke nilai boolean
