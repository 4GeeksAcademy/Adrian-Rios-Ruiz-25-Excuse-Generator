/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomArray = array => {
    const randomSentence = Math.floor(Math.random() * array.length);
    return array[randomSentence];
  };

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "on saturday!",
    "when i finish work!",
    "when i was studing!",
    "during the morning!"
  ];

  let fraseAleatoria =
    randomArray(who) +
    " " +
    randomArray(action) +
    " " +
    randomArray(what) +
    " " +
    randomArray(when);

  document.querySelector("#excuse").innerHTML = fraseAleatoria;
};
