const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

const formula = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

button.addEventListener("click", (e) => {
  e.preventDefault();

  const value = Number(input.value.trim());
  
  if (!value) {
    result.innerText = "⚠️ Please enter a valid number.";
  } else if (value < 1) {
    result.innerText = "⚠️ Please enter a number ≥ 1.";
  } else if (value > 3999) {
    result.innerText = "⚠️ Please enter a number ≤ 3999.";
  } else {
    let display = "";
    let remaining = value;
    
    for (const [roman, num] of formula) {
      while (remaining >= num) {
        display += roman;
        remaining -= num;
      }
    }
    result.innerText = `✅ ${value} → ${display}`;
  }
});
