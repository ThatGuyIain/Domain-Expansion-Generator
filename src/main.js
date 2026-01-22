import "./style.css";

const WORDS = {
  nature: {
    adj: [
      "Serene",
      "Tranquil",
      "Peaceful",
      "Harmonious",
      "Cordial",
      "Graceful",
      "Mysticical",
      "Joyful",
    ],
    noun: [
      "Meadow",
      "Forest",
      "Swamp",
      "Storm",
      "Ocean",
      "Mist",
      "Burst",
      "Storm",
    ],
  },
  space: {
    adj: [
      "Despair",
      "Hopeless",
      "Unlimited",
      "Inifinite",
      "Phantom",
      "Dying",
      "Nova",
      "Delirious",
    ],
    noun: [
      "Void",
      "Light",
      "Solar",
      "Nebula",
      "Darkness",
      "Gravity",
      "Beacon",
      "Eclipse",
    ],
  },
  art: {
    adj: [
      "Sketch",
      "Bold",
      "Pastel",
      "Vivid",
      "Raw",
      "Layered",
      "Fluid",
      "Gestural",
    ],
    noun: [
      "Canvas",
      "Stroke",
      "Palette",
      "Form",
      "Line",
      "Shade",
      "Frame",
      "Pigment",
    ],
  },
  fantasy: {
    adj: [
      "Ancient",
      "Gilded",
      "Fabled",
      "Ember",
      "Frost",
      "Hollow",
      "Crimson",
      "Silent",
    ],
    noun: [
      "Sanctum",
      "Throne",
      "Relic",
      "Veil",
      "Fortress",
      "Shrine",
      "Sigil",
      "Citadel",
    ],
  },
  random: {
    adj: [
      "Serene",
      "Tranquil",
      "Peaceful",
      "Harmonious",
      "Cordial",
      "Graceful",
      "Mysticical",
      "Joyful",
      "Despair",
      "Hopeless",
      "Unlimited",
      "Inifinite",
      "Phantom",
      "Dying",
      "Nova",
      "Delirious",
      "Sketch",
      "Bold",
      "Pastel",
      "Vivid",
      "Raw",
      "Layered",
      "Fluid",
      "Gestural",
      "Ancient",
      "Gilded",
      "Fabled",
      "Ember",
      "Frost",
      "Hollow",
      "Crimson",
      "Silent",
    ],
    noun: [
      "Meadow",
      "Forest",
      "Swamp",
      "Storm",
      "Ocean",
      "Mist",
      "Burst",
      "Storm",
      "Void",
      "Light",
      "Solar",
      "Nebula",
      "Darkness",
      "Gravity",
      "Beacon",
      "Eclipse",
      "Canvas",
      "Stroke",
      "Palette",
      "Form",
      "Line",
      "Shade",
      "Frame",
      "Pigment",
      "Sanctum",
      "Throne",
      "Relic",
      "Veil",
      "Fortress",
      "Shrine",
      "Sigil",
      "Citadel",
    ],
  },
};

function pick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  const theme = document.getElementById("theme");
  const format = document.getElementById("format");
  const { adj, noun } = WORDS[theme.value];

  let name;
  if (format.value === "adj-noun") {
    name = `${pick(adj)} ${pick(noun)}`;
  } else {
    let noun = pick(WORDS);

    let adj = pick(WORDS[theme.value].adj);

    name = `${adj} ${noun}`;
  }

  document.getElementById("output").textContent = name;
}

function createGenerateButton() {
  const btn = document.createElement("button");
  btn.textContent = "Generate";
  btn.addEventListener("click", () => {
    generate();
  });
  document.body.appendChild(btn);
}

createGenerateButton();

generate();
