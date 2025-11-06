// SWITCH -> Digunakan untuk mengeksekusi blok kode yang berbeda berdasarkan nilai expresi tertentu -> Ini adalah alternatif lain dari if conditional statement

/*
    PATTERN :
    switch(<expression>){
        case value1:
            // Code here
            break;
        case value2:
            // Code here
            break;
        .
        .
        .
        default:
            // Code here 
    }
*/

let grade = "C";
switch (grade) {
  case "A":
    console.log("TERBAIK......");
    break;
  case "B":
    console.log("TEROKEEE.......");
    break;
  default:
    console.log("KAGA ADA NILAI");
}

let trafficLight = "merah";
switch (trafficLight) {
  case "merah":
    console.log("STOP");
    break;
  case "kuning":
    console.log("Siap-siappp soalnya udah mau jalan");
    break;
  case "hijau":
    console.log("Jalannnn woyyy");
    break;
  default:
    console.log("Lampu merah nya rusak");
}

if (trafficLight === "merah") {
  console.log("STOP");
} else if (trafficLight === "kuning") {
  console.log("Siap-siappp soalnya udah mau jalan");
} else if (trafficLight === "hijau") {
  console.log("Jalannnn woyyy");
} else {
  console.log("Lampu merah nya rusak");
}

let darkMode = "light";
angka = 20;
switch (darkMode) {
  case "dark":
    console.log("Dark Mode");
    break;
  case "light":
    switch (angka) {
      case 10:
        console.log("Light mode 10%");
        break;
      case 20:
        console.log("Light mode 20%");
        break;
    }
    break;
  default:
    console.log("Aplikasi error");
}
