function updateReason() {
  const val = document.getElementById('reasonInput').value;
  document.getElementById('mainDisplay').textContent =
    val || "I’m planning on being human.";
  document.getElementById('reasonDisplay').textContent =
    val || "[ type your reason below ]";
}

// infinite catchphrase randomization
const catchPhrases = [
  "Documenting to understand is essential during phases of transition, grief, abstraction, or emotional clarity.",
  "When things don’t work out, leave it to the unknown. Let it go, or accept it.",
  "In mathematics, it was never the numbers that intrigued me, but the relationships they formed within the equation.",
  "I was born into a world that values what I can do more than who I am.",
  "Let go of the past, but honour it.",
  "Quicker & Quicker",
  "Anger is a constant state of paradox.",
  "No idea is sacred.",
  "At some point everything was recorded live. Whether it was a video, a song or even these words.",
  "We’re lucky to be experiencing life—for the first time.",
  "I’m not here to perform creativity. I’m here to hold complexity.",
  "Nothing captures the human experience quite like hypocrisy.",
  "Discipline is just asking yourself: “Are you going to give up?”",
  "Some days are for output. Some are for observation.",
  "Intensity is refinement.",
  "Tomorrow is the day I wake up.",
  "No one needs to know I lived—they just need to know someone challenged it.",
  "I wonder why I still try?",
  "No idea is sacred."
];

function showRandomCatchphrase() {
  const idx = Math.floor(Math.random() * catchPhrases.length);
  document.getElementById('catch-phrase').textContent = catchPhrases[idx];
}

// initial random catchphrase
showRandomCatchphrase();
// randomize every 4 seconds
setInterval(showRandomCatchphrase, 4000);
