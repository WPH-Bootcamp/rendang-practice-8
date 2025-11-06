// FUNCTION EXPRESSION

// -. FUNCTION DECLARATION
function sayHi() {
  console.log("HAIIII....");
}

sayHi();

// -. FUNCTION EXPRESSION dengan DECLARATION FUNCTION
let hiHuda = function sayHi(nama) {
  console.log("HELLOOOO.....", nama);
};

hiHuda("Hudaaa");

// -. FUNCTION EXPRESSION dengan ANONYMOUS FUNCTION
let hiJoseph = function () {
  console.log("OLAAA.....");
};

hiJoseph();

// CONTOH
function ask(pertanyaan, ya, tidak) {
  console.log(pertanyaan, "?");
  if (true) ya();
  else tidak();
}

ask(
  "Sudah makan",
  function () {
    console.log("sudahhhhh....");
  },
  function () {
    console.log("Belummhhh");
  }
);
