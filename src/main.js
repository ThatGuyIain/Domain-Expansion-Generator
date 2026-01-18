const WORDS = {
  pokemon: {
    adj: ["Shiny", "Wild", "Mega", "Shadow", "Crystal", "Thunder", "Mystic", "Primal"],
    noun: ["Spark", "Fang", "Wing", "Crest", "Orb", "Tail", "Burst", "Storm"]
  },
  space: {
    adj: ["Rogue", "Rebel", "Imperial", "Hyper", "Phantom", "Binary", "Nova", "Stealth"],
    noun: ["Squadron", "Protocol", "Sabre", "Nebula", "Cruiser", "Droid", "Beacon", "Fleet"]
  },
  art: {
    adj: ["Sketch", "Bold", "Pastel", "Vivid", "Raw", "Layered", "Fluid", "Gestural"],
    noun: ["Canvas", "Stroke", "Palette", "Form", "Line", "Shade", "Frame", "Pigment"]
  },
  fantasy: {
    adj: ["Ancient", "Gilded", "Fabled", "Ember", "Frost", "Hollow", "Crimson", "Silent"],
    noun: ["Sanctum", "Throne", "Relic", "Veil", "Crown", "Blade", "Sigil", "Citadel"]
  }
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generate() {
  const theme = document.getElementById("theme").value;
  const format = document.getElementById("format").value;
  const { adj, noun } = WORDS[theme];
  
  let name;
  if (format === "adj-noun") {
    name = `${pick(adj)} ${pick(noun)}`;
  } else if (format === "alliterative") {
    // Pick a letter, filter words starting with it
    const letter = pick("ABCEFGHILMNPRST".split(""));
    const a = adj.find(w => w[0] === letter) || pick(adj);
    const n = noun.find(w => w[0] === letter) || pick(noun);
    name = `${a} ${n}`;
  } else { // codename
    name = `${pick(noun)} v0.${Math.floor(Math.random()*9)+1}`;
  }
  
  document.getElementById("output").textContent = name;
}

function copyName() {
  navigator.clipboard.writeText(document.getElementById("output").textContent);
  document.querySelector(".copy-btn").textContent = "✓ Copied!";
  setTimeout(() => document.querySelector(".copy-btn").textContent = "📋 Copy", 1500);
}

generate();