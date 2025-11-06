// LOOPING => adalah cara kita untuk menjalankan kode berulang kali sampai kondisi tertentu tidak lagi terpenuhi.
/*
    Macam-macam Looping :
    1. while loop
    2. do...while loop
    3. for loop
*/

// 1. WHILE LOOP
/*
    PATTERN :
    while(kondisi){
        // Code here
    }
*/
// let count = 1;
// while (count <= 3) {
//   console.log("Count : ", count);
//   count++; // Increment
// }

// 2. DO...WHILE LOOP
/*
    PATTERN :
    do{
        // Code here
    }while(kondisi)
*/
// let jalan = 1;
// do {
//   console.log("Jalan = ", jalan);
//   jalan = jalan + 1;
// } while (jalan <= 3);

// NOTES : Increment / Decrement dalam looping adalah cara kita untuk membuat kondisi failure

// 3. FOR LOOP
/*
    PATTERN:
    for(initialization; condition; step (increment/decrement)){
        // Code here
    }
*/
// for (let a = 1; a <= 10; a = a + 1) {
//   console.log("Perulangan ke-" + a);
// }

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }

// i++ -> i = i + 1 (increment)
// i-- -> i = i - 1 (decrement)

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// 4. BREAK KEYWORD -> Keluar dari loop secara paksa
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log(i);
    break;
  }
}

console.log("============");

// 5. CONTINUE KEYWORD -> Melewati satu iterasi, lanjut ke berikutnya
for (let j = 1; j <= 10; j++) {
  if (j % 2 !== 0) continue;
  console.log(j);
}
