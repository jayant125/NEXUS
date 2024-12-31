const quotes = [
  "The best way to predict the future is to invent it. - Alan Kay",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "In order to be irreplaceable, one must always be different. - Coco Chanel",
  "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
  "Knowledge is power. - Francis Bacon",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry",
  "Before software can be reusable, it first has to be usable. - Ralph Johnson",
  "Code never lies, comments sometimes do. - Ron Jeffries",
  "Make it work, make it right, make it fast. - Kent Beck",
  "Optimism is an occupational hazard of programming; feedback is the treatment. - Kent Beck",
  "Fix the cause, not the symptom. - Steve Maguire",
  "It’s not a bug – it’s an undocumented feature. - Anonymous",
  "Programming isn’t about what you know; it’s about what you can figure out. - Chris Pine",
  "Tests are stories we tell the next generation of programmers. - Roy Osherove"
];

function generate_quote() {
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length); // Fixed .length() to .length
  text.textContent = quotes[index]; // Fixed to show a specific quote, not the entire array
}

setInterval(generate_quote, 2000);

// Change Background Color
const bg_color = [
  "#FF5733", // Vibrant Orange
  "#33FF57", // Bright Green
  "#3357FF", // Rich Blue
  "#FF33A1", // Hot Pink
  "#A133FF", // Deep Purple
  "#33FFF5", // Aqua Blue
  "#FFBE33", // Golden Yellow
  "#BFFF33", // Lime Green
  "#FF3333", // Red
  "#33FFC4", // Teal
  "#663399", // Rebecca Purple
  "#FFFF33", // Bright Yellow
  "#FF9933", // Tangerine
  "#33FF99", // Mint Green
  "#3399FF", // Sky Blue
  "#9933FF", // Violet
  "#FF3333", // Scarlet
  "#33FF33", // Neon Green
  "#3333FF", // Royal Blue
  "#FF66CC"  // Light Pink
];

let colorIndex = 0; // Added index to keep track of the current color
const body = document.querySelector('body');

function change_color() {
  body.style.backgroundColor = bg_color[colorIndex];
  colorIndex = (colorIndex + 1) % bg_color.length; // Cycle through colors
}

setInterval(change_color, 2000);
