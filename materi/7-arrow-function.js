// ARROW FUNCTION

// -. FUNCTION DECLARATION
function sayHi() {
  console.log("HAIIII....");
}

sayHi();

// -. FUNCTION EXPRESSION dengan DECLARATION FUNCTION
let hiHuda = function sayHi() {
  console.log("HELLOOOO.....");
};

hiHuda();

// -. FUNCTION EXPRESSION dengan ANONYMOUS FUNCTION
let hiJoseph = function () {
  console.log("OLAAA.....");
};

hiJoseph();

// -. ARROW FUNCTION
let hiIhsan = () => {
  console.log("PRIVIETTT.....");
};
hiIhsan();

let hiIhsanOneLine = () => console.log("GUTEN MORGEN....");
hiIhsanOneLine();

// -. ARROW FUNCTION MULTILINE
let multiply = (a, b) => a * b;
let result = multiply(10, 4);
console.log(result);

let fungsi = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};

console.log(fungsi());
