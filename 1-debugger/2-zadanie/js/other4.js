const input1 = document.querySelector("#nr1");
const input2 = document.querySelector("#nr2");
const form = document.querySelector("form");

[input1, input2].forEach((el) => {
  el.addEventListener("input", function () {
    const newVal = this.value.replace(/[^0-9]*/g, "");
    this.value = newVal;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  console.log(typeof val1);
  alert(val1 + val2);
});
