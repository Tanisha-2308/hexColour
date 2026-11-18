const extendedHexColors = [
  "#FF3333", // Electric Red
  "#D1001C", // Crimson
  "#E63946", // Imperial Red
  "#9B2226", // Deep Wine
  "#FF4D6D", // Bright Amaranth

  // Orange & Terracotta Tones
  "#FF5722", // Material Orange
  "#F4A261", // Sandy Brown
  "#E76F51", // Burnt Sienna
  "#D97706", // Amber Dark
  "#FF8C00", // Dark Orange

  // Yellow & Gold Tones
  "#FFD700", // Gold
  "#F1C40F", // Sunflower Yellow
  "#FFEE58", // Canary Yellow
  "#E6B800", // Mustard Gold
  "#FFF9C4", // Pale Lemon

  // Green & Olive Tones
  "#2ECC71", // Emerald Green
  "#27AE60", // Nephrite Green
  "#4CAF50", // Material Green
  "#81C784", // Light Leaf Green
  "#556B2F", // Dark Olive Green
  "#A7F3D0", // Emerald Ice
  "#10B981", // Jade Green

  // Blue & Teal Tones
  "#3498DB", // Peter River Blue
  "#2980B9", // Belize Hole Blue
  "#1E3A8A", // Deep Navy
  "#2563EB", // Royal Blue
  "#38BDF8", // Sky Blue
  "#0EA5E9", // Ocean Blue
  "#0369A1", // Deep Sea Blue
  "#008080", // Classic Teal
  "#20B2AA", // Light Sea Green

  // Purple & Violet Tones
  "#9B59B6", // Amethyst Purple
  "#8E44AD", // Wisteria Purple
  "#7C3AED", // Vivid Violet
  "#C084FC", // Soft Purple
  "#4C1D95", // Royal Plum

  // Pink & Rose Tones
  "#FF69B4", // Hot Pink
  "#FF1493", // Deep Pink
  "#F472B6", // Rose Pink
  "#FDA4AF", // Soft Rose
  "#EC4899", // Magenta Pink

  // Neutrals, Warm Grays & Browns
  "#1A1A1A", // Off-Black
  "#2D3748", // Slate Gray
  "#718096", // Cool Gray
  "#A0AEC0", // Light Slate
  "#E2E8F0", // Platinum Gray
  "#F7FAFC", // Ice White
  "#8B4513", // Saddle Brown
  "#D2B48C", // Tan Beige
  "#F5F5DC"  // Beige
];

let hex = document.querySelector("#hex");
let body = document.querySelector("body");
let hex2 = document.querySelector("#hex2");

hex2.addEventListener("click", function () {
  let random = Math.floor(Math.random() * extendedHexColors.length);
  body.style.backgroundColor = extendedHexColors[random];
  hex.textContent = extendedHexColors[random];
});