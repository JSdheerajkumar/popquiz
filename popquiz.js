var total = 10; // Total number of questions
var question = new Array();

for (var i = 1; i <= total; i++) {
  var temp = "choice" + i + " = new Array()";
  eval(temp);
}

var solution = new Array();

/* Compliments for correct answers */
var compliments = new Array();
compliments[0] = "Bears. Beets. Brilliant!";
compliments[1] = "World’s Best Answer!";
compliments[2] = "Assistant to the Quiz Master!";
compliments[3] = "That’s what she said!";
compliments[4] = "Jim would be proud!";
compliments[5] = "Pretzel day vibes!";
compliments[6] = "You nailed it, Creed!";
compliments[7] = "Kevin-approved!";
compliments[8] = "You’re killing it, Kelly!";
compliments[9] = "Like Andy: Nailed it!";
compliments[10] = "No party for Toby!";
compliments[11] = "Warehouse smooth!";
compliments[12] = "Jan-level win!";
compliments[13] = "Brownie points!";
compliments[14] = "Oscar-perfect!";


/* Questions, choices, and solutions */
question[1] = "I'm not superstitious, but I am a little stitious.";
choice1[1] = "Michael Scott";
choice1[2] = "Jim Halpert";
choice1[3] = "Dwight Schrute";
choice1[4] = "Kevin Malone "

question[2] = "Bears. Beets. Battlestar Galactica.";
choice2[1] = "Dwight Schrute";
choice2[2] = "Jim Halpert";
choice2[3] = "Michael Scott";
choice2[4] = "Kevin Malone "

question[3] = "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.";
choice3[1] = "Michael Scott";
choice3[2] = "Kevin Malone";
choice3[3] = "Andy Bernard";
choice3[4] = "Jim Halpert";

question[4] = "Identity theft is not a joke, Jim! Millions of families suffer every year!";
choice4[1] = "Dwight Schrute";
choice4[2] = "Jim Halpert";
choice4[3] = "Michael Scott";
choice4[4] = "Andy Bernard";

question[5] = "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.";
choice5[1] = "Michael Scott";
choice5[2] = "Dwight Schrute";
choice5[3] = "Andy Bernard";
choice5[4] = "Jim Halpert";

question[6] = "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.";
choice6[1] = "Dwight Schrute";
choice6[2] = "Jim Halpert";
choice6[3] = "Michael Scott";
choice6[4] = "Stanley Hudson";

question[7] = "Did I stutter?";
choice7[1] = "Stanley Hudson";
choice7[2] = "Michael Scott";
choice7[3] = "Angela Martin";
choice7[4] = "Pam Beesly"

question[8] = "I am fast. To give you a reference point, I am somewhere between a snake and a mongoose… and a panther.";
choice8[1] = "Dwight Schrute";
choice8[2] = "Jim Halpert";
choice8[3] = "Andy Bernard";
choice8[4] = "Pam Beesly"

question[9] = "You don't even know my real name. I'm the [expletive] Lizard King.";
choice9[1] = "Creed Bratton";
choice9[2] = "Michael Scott";
choice9[3] = "Kevin Malone";
choice9[4] = "Pam Beesly"

question[10] = "Why waste time say lot word when few word do trick?";
choice10[1] = "Michael Scott";
choice10[2] = "Kevin Malone";
choice10[3] = "Creed Bratton";
choice10[4] = "Pam Beesly"

/* Correct answers */
solution[1] = "a"; // Michael Scott
solution[2] = "b"; // Jim Halpert
solution[3] = "a"; // Michael Scott
solution[4] = "a"; // Dwight Schrute
solution[5] = "a"; // Michael Scott
solution[6] = "a"; // Dwight Schrute
solution[7] = "a"; // Stanley Hudson
solution[8] = "a"; // Dwight Schrute
solution[9] = "a"; // Creed Bratton
solution[10] = "b"; // Kevin Malone

/* Function to check answers */
function checkAnswers() {
  var score = 0;

  for (var i = 1; i <= total; i++) {
    var userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (userAnswer && userAnswer.value === solution[i]) {
      score++;
      alert(compliments[Math.floor(Math.random() * compliments.length)]);
    }
  }

  alert("Your final score: " + score + "/" + total);
}
