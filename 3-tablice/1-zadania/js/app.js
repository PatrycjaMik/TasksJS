//ZADANIE 1
//FOR EACH
function showArray(array) {
  array.forEach((e) => {
    let sum = e.length;
    console.log(e, sum);
  });
}
showArray(["pies", "kot", "kon", "ptak", "sowa"]);

//FOR
function showArray1(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i], array[i].length);
  }
}

showArray1(["ww", "ffff", "bbbbbbb", "q", "tttttttt"]);

//FOR OF

function showArray2(array) {
  for (const el of array) {
    console.log(el, el.length);
  }
}
showArray2(["ania", "kasia", "ewa", "ela", "ola"]);

//TOTAL SUM
function showArray3(array) {
  const numbers = array.map((e) => e.length);
  console.log(numbers.reduce((a, b) => a + b, 0));
}
showArray3(["pies", "kot", "kon", "ptak", "sowa"]);

// ZADANIE 2

function checkPalindrom(txt) {
  const txt1 = txt;
  const normal = txt1.split("").reverse().join();
  const no = txt1.split("").join();
  let comparision = normal === no;
  return comparision;
}
checkPalindrom("kupuk");
