"use strict";
//Hoofdprogramma
const keuzes = document.querySelectorAll("a");
for (const keuze of keuzes) {
  keuze.onclick = function () {
    const optie = keuze.id;
    const computerKeuze = genereerComputerKeuze();
    //check als er al een foto staat
    if (document.querySelectorAll("#computerKeuze img").length === 0) {
      const img = document.createElement("img");
      img.src = `img/${computerKeuze}.png`;
      document.getElementById("computerKeuze").appendChild(img);
    } else {
      const changeImg = document.querySelector("#computerKeuze img");
      changeImg.src = `img/${computerKeuze}.png`;
    }
    document.getElementById("resultaat").innerText = zoekWinnaar(
      optie,
      computerKeuze
    );
  };
}
//De keuze van de computer
function genereerComputerKeuze() {
  const nummer = Math.floor(Math.random() * 3);
  const keuzes = ["blad", "steen", "schaar"];
  return keuzes[nummer];
}
//Zoek de winnaar
function zoekWinnaar(gebruikerKeuze, computerKeuze) {
  let winnaar = "";
  if (gebruikerKeuze === computerKeuze) {
    winnaar = "Gelijkspel";
  } else if (gebruikerKeuze === "blad") {
    if (computerKeuze === "steen") {
      winnaar = "Je hebt gewonnen!!";
    } else {
      winnaar = "Je hebt verloren";
    }
  } else if (gebruikerKeuze === "steen") {
    if (computerKeuze === "schaar") {
      winnaar = "Je hebt gewonnen!!";
    } else {
      winnaar = "Je hebt verloren";
    }
  } else {
    if (computerKeuze === "blad") {
      winnaar = "Je hebt gewonnen!!";
    } else {
      winnaar = "Je hebt verloren";
    }
  }
  return winnaar;
}
