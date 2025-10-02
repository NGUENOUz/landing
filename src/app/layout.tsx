import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "Formation pratique sur la génération d'image avec L'IA",
  description:
    "Deviens un expert en génération d'images et apprend à monétiser cette compétence",

  icons: {
    icon: "./DrenoIco.png", // Chemin vers votre fichier favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
