// NULLISH COALESCING -> Hanya bekerja pada nilai null dan undefined
let username = "";
console.log(username ?? "Anonymous");
console.log(username || "Anonymous");

let umur = 0;
console.log(umur ?? "belum lahir");
console.log(umur || "belum lahir");

let score = 0;
console.log(score || "Belum ada score");
console.log(score ?? "Belum ada score");
