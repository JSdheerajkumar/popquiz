var total = 10; // Total number of questions
var question = new Array();

for (var i = 1; i <= total; i++) {
  var temp = "choice" + i + " = new Array()";
  eval(temp);
}

var solution = new Array();

/* Compliments for correct answers */
var compliments = new Array();
compliments[0] = "Excellent!";
compliments[1] = "Wow, you're really rocking!";
compliments[2] = "You must have studied hard. Good job!";
compliments[3] = "Right on.";
compliments[4] = "Correct!";
compliments[5] = "Great Job!";
compliments[6] = "Good work!";

/* Questions, choices, and solutions */
question[1] = "I'm not superstitious, but I am a little stitious.";
choice1[1] = "Michael Scott";
choice1[2] = "Jim Halpert";
choice1[3] = "Dwight Schrute";

question[2] = "Bears. Beets. Battlestar Galactica.";
choice2[1] = "Dwight Schrute";
choice2[2] = "Jim Halpert";
choice2[3] = "Michael Scott";

question[3] = "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.";
choice3[1] = "Michael Scott";
choice3[2] = "Kevin Malone";
choice3[3] = "Andy Bernard";

question[4] = "Identity theft is not a joke, Jim! Millions of families suffer every year!";
choice4[1] = "Dwight Schrute";
choice4[2] = "Jim Halpert";
choice4[3] = "Michael Scott";

question[5] = "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.";
choice5[1] = "Michael Scott";
choice5[2] = "Dwight Schrute";
choice5[3] = "Andy Bernard";

question[6] = "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.";
choice6[1] = "Dwight Schrute";
choice6[2] = "Jim Halpert";
choice6[3] = "Michael Scott";

question[7] = "Did I stutter?";
choice7[1] = "Stanley Hudson";
choice7[2] = "Michael Scott";
choice7[3] = "Angela Martin";

question[8] = "I am fast. To give you a reference point, I am somewhere between a snake and a mongoose… and a panther.";
choice8[1] = "Dwight Schrute";
choice8[2] = "Jim Halpert";
choice8[3] = "Andy Bernard";

question[9] = "You don't even know my real name. I'm the [expletive] Lizard King.";
choice9[1] = "Creed Bratton";
choice9[2] = "Michael Scott";
choice9[3] = "Kevin Malone";

question[10] = "Why waste time say lot word when few word do trick?";
choice10[1] = "Michael Scott";
choice10[2] = "Kevin Malone";
choice10[3] = "Creed Bratton";

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
