/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "waitress",
    "police officer",
    "dog",
    "alligator",
    "musician",
    "monster"
  ];
  let action = [
    "took my",
    "threw my",
    "ate my",
    "stepped on my",
    "stole my",
    "bit my"
  ];
  let posession = ["homework", "phone", "cheeto", "shoe"];
  let where = ["in the restaurant.", "at my house.", "at the park."];
  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posessionIndex = Math.floor(Math.random() * posession.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndex] +
    " " +
    posession[posessionIndex] +
    " " +
    where[whereIndex]
  );
};
