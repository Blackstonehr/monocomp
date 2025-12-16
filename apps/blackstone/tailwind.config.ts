// tailwind.config.ts

import type { Config } from "tailwindcss";
import sharedPreset from "../../packages/config/tailwind-preset";

const config: Config = {
  presets: [sharedPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}", // or wherever your Card/Button live
  ],
};

export default config;
