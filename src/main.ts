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
      "Mystical",
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
  const theme = document.getElementById("theme") as HTMLSelectElement;
  const format = document.getElementById("format") as HTMLSelectElement;
  const { adj, noun } = WORDS[theme.value as keyof typeof WORDS];

  let name: string;
  if (format.value === "adj-noun") {
    name = `${pick(adj)} ${pick(noun)}`;
  } else {
    const randomTheme = Object.keys(
      WORDS,
    )[
      Math.floor(Math.random() * Object.keys(WORDS).length)
    ] as keyof typeof WORDS;
    const nounValue = pick(WORDS[randomTheme].noun);

    const adjValue = pick(WORDS[theme.value as keyof typeof WORDS].adj);

    name = `${adjValue} ${nounValue}`;
  }

  const output = document.getElementById("output") as HTMLDivElement;
  output.textContent = name;
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
