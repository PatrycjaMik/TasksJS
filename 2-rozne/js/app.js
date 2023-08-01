// ZADANIE 1
const text = prompt("wpisz swój text");

if (text.length > 0) {
  alert(`${text} składa się z ${text.split(" ").length} wyrazów`);
} else {
  alert("nie mam co liczyć");
}

//ZADANIE 2

function fixName(name) {
  let usersName = prompt("podaj imię", name);
  let bigLetter = usersName.charAt(0).toUpperCase() + usersName.slice(1);
  return `imię ${bigLetter} rozpoczyna się od litery ${usersName
    .charAt()
    .toUpperCase()}`;
}
console.log(fixName());

//ZADANIE 3

function fileInfo(file) {
  const files = {};
  console.log(files);
  const word = file;
  let getExtension = word.split(".").at(1);
  let getName = word.split(".").at(0);
  files.name = getName;
  files.extension = getExtension;
  if (getName.length && getExtension.length) {
    return files;
  }
  return false;
}
console.log(fileInfo("k.asd"));

//ZADANIE 4
