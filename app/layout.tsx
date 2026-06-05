import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yegli.dev"),
  title: {
    default: "Yegli — UI/UX Developer",
    template: "%s | Yegli",
  },
  description:
    "Portafolio de Yegli, desarrolladora UI/UX especializada en interfaces modernas, accesibles y con enfoque en performance.",
  keywords: ["UI/UX Developer", "Frontend Developer", "Next.js", "React", "Diseño web", "Portafolio"],
  authors: [{ name: "Yegli" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://yegli.dev",
    siteName: "Yegli Portfolio",
    title: "Yegli — UI/UX Developer",
    description:
      "Portafolio de Yegli, desarrolladora UI/UX especializada en interfaces modernas, accesibles y con enfoque en performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yegli — UI/UX Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yegli — UI/UX Developer",
    description:
      "Portafolio de Yegli, desarrolladora UI/UX especializada en interfaces modernas, accesibles y con enfoque en performance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Anti-FOUC: only honor an explicit user choice saved in localStorage; default = light */
const themeScript = `
(function(){
  try{
    if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');
  }catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Yegli",
                jobTitle: "UI/UX Developer",
                url: "https://yegli.dev",
                sameAs: [
                  "https://github.com/yegli",
                  "https://linkedin.com/in/yegli",
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
