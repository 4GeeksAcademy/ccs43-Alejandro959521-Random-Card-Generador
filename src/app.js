/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let numerosC = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "K", "A"];
  let simbolosC = ["♣", "♥", "♠", "♦"];

  let numeroA = getRandomInt(simbolosC.length);
  document.querySelector(".simbolo1").innerHTML = simbolosC[numeroA];

  document.querySelector(".simbolo2").innerHTML = simbolosC[numeroA];

  document.querySelector(".numeros").innerHTML =
    numerosC[getRandomInt(numerosC.length)];

  if (simbolosC[numeroA] == "♦" || simbolosC[numeroA] == "♥") {
    document.querySelector(".simbolo1").style.color = "red";
    document.querySelector(".simbolo2").style.color = "red";
  } else {
    document.querySelector(".simbolo1").style.color = "black";
    document.querySelector(".simbolo2").style.color = "black";
  }
};

document.querySelector(".cambialo").addEventListener("click", Cambialo);

function Cambialo() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let numerosC = ["J", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "K", "A"];
  let simbolosC = ["♣", "♥", "♠", "♦"];

  let numeroA = getRandomInt(simbolosC.length);
  document.querySelector(".simbolo1").innerHTML = simbolosC[numeroA];

  document.querySelector(".simbolo2").innerHTML = simbolosC[numeroA];

  document.querySelector(".numeros").innerHTML =
    numerosC[getRandomInt(numerosC.length)];

  if (simbolosC[numeroA] == "♦" || simbolosC[numeroA] == "♥") {
    document.querySelector(".simbolo1").style.color = "red";
    document.querySelector(".simbolo2").style.color = "red";
  } else {
    document.querySelector(".simbolo1").style.color = "black";
    document.querySelector(".simbolo2").style.color = "black";
  }
}
setInterval(Cambialo, 10000);
