let colorCode = document.querySelector(".colorcode");
let btn = document.querySelector(".btn");
let body = document.querySelector(".body");
let gen = document.querySelector(".colorgenerator");
let bo = document.querySelector(".box");

let dec = [
  1,
  2,
  3,
  4,
  5,
  6,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let dec1 = [
  1,
  2,
  3,
  4,
  5,
  6,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener(
  "click",
  (fun = () => {
    let code = "#";
    let newCode = "#";
    let anCode = "#";
    let boxCode = "#";

    for (let i = 0; i < 6; i++) {
      code += dec[Random()];
    }
    for (let i = 0; i < 6; i++) {
      newCode += dec[Random()];
    }

    for (let i = 0; i < 6; i++) {
      anCode += dec1[Random1()];
    }
    for (let i = 0; i < 6; i++) {
      boxCode += dec[Random()];
    }

    colorCode.innerHTML = code;
    body.style.background = "linear-gradient(" + code + "," + newCode + ")";
    gen.style.background = "linear-gradient(" + code + "," + newCode + ")";
    bo.style.background = "linear-gradient(" + code + "," + newCode + ")";
  })
);

const Random = () => {
  return Math.floor(Math.random() * dec.length);
};

const Random1 = () => {
  return Math.floor(Math.random() * dec1.length);
};
