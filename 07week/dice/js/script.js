let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.getElementById("report").innerHTML = ""; // clear/reset the report box
  let diceHtml = document.getElementsByClassName('die'); // puts all the individual dice HTML elements in diceHtml. Using let instead of var or const so we're not caught on scope issues
  let pair = 0;
  let house = 0;
  let straight = [];
  let score = 0;
  for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled dice are equal to the ones we're counting
        howManyDice++; // if so, we add one to the count
        straight.push(diceHtml[die].getAttribute('data-roll'));
      }
    }

    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.getElementById("report").innerHTML += "Pair of " + dieVal + "s.<br>";
      pair++;
    } else if (howManyDice === 3) {
      document.getElementById("report").innerHTML += "Triple" + dieVal + "s.<br>";
      house++;
    } else if (howManyDice === 4) {
      document.getElementById("report").innerHTML += dieVal + "s four of a kind.<br>";
    } else if (howManyDice === 5) {
      document.getElementById("report").innerHTML += "Yacht of " + dieVal + "s.<br>";
    }
  }
  if (pair === 2) {
    document.getElementById("report").innerHTML += "Two pairs.<br>";
  }
  if ((pair === 1) && (house === 1)) {
    document.getElementById("report").innerHTML += "Full-house.<br>";
  }
  straight.sort();
  straight.toString();
  if (straight == "1,2,3,4,5") {
    document.getElementById("report").innerHTML += "Small-straight.<br>";
  }
  if (straight == "2,3,4,5,6") {
    document.getElementById("report").innerHTML += "Big-straight.<br>";
  }
  // two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
  // three of dice have the same points, like 2 4 5 4 4 - called three;
  // four of dice have the same points, like 1 4 1 1 1 - called four;
  // all five dice have the same points, like 2 2 2 2 2 - called yacht;
  // two pairs at once, like 3 6 5 3 5 - called two-pairs;
  // pair and three at once, like 1 6 6 1 6 - called full-house;
  // sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
  // sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}
// report the results in the div with the ID 'report'.
report();
