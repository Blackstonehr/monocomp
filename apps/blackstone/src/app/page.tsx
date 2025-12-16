import type { Metadata } from "next";
import { LanguBridgeHomepage } from "./langu-bridge-homepage";

// Metadata for SEO
export const metadata: Metadata = {
  title: "LanguBridge Education Centre | Immersive Language Programs",
  description:
    "Immersive summer language programs in Korea, Japan, and China. Connect the world by language with LanguBridge.",
};

export default function Page() {
  return <LanguBridgeHomepage />;
}
