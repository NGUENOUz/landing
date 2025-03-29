import type { Metadata } from "next";


import "./global.css";

export const metadata: Metadata = {
  title: "Formation pratique en burautique",
  description: "Devenez un expert des outils bureautiques et boostez votre carrière",

  icons: {
    icon: './DrenoIco.png', // Chemin vers votre fichier favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
