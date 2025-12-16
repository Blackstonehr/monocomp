import type { Config } from "tailwindcss";
import sharedPreset from "../config/tailwind-preset.ts";

const config: Config = {
  presets: [sharedPreset],
  // This config is for the UI package. The consuming app (main-site) will have its own content array.
  content: ["./**/*.{ts,tsx}"],
};

export default config;
