const nama = "adam rifais";
let usia = 50;

let biodata = document.getElementById("biodata");

// console.log("nama saya adalah", nama, "usia saya adalah", usia);
function generateBiodata() {
  let generasi;

  if (usia > 0 && usia < 12) {
    generasi = "generasi anak anak";
  } else if (usia > 13 && usia < 18) {
    generasi = "generasi remaja";
  } else if (usia > 19 && usia < 30) {
    generasi = "generasi dewasa";
  } else {
    generasi = "generasi usia lanjut";
  }

  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();
