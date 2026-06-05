import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "@/src/context/LanguageContext";
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
    default: "Yeglimar Montanez — Full Stack Developer & UI/UX Designer",
    template: "%s | Yeglimar Montanez",
  },

  description:
    "Portafolio de Yeglimar Montanez, desarrolladora Full Stack e Ingeniería en Computación egresada de la URU. Especializada en React, React Native, C#, Node.js, y diseño UI/UX. Disponible para proyectos freelance y oportunidades.",

  keywords: [
    "Yeglimar Montanez",
    "Yegli",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "C#",
    "Node.js",
    "Ingeniería en Computación",
    "Universidad Rafael Urdaneta",
    "Portafolio desarrolladora",
    "Frontend Developer Venezuela",
    "Desarrolladora web",
    "Aplicaciones móviles",
  ],

  authors: [{ name: "Yeglimar Montanez", url: "https://yegli.dev" }],
  creator: "Yeglimar Montanez",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://yegli.dev",
    siteName: "Yeglimar Montanez — Portfolio",
    title: "Yeglimar Montanez — Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer especializada en React, React Native, C# y Node.js. Proyectos reales para COLBÚN, URU y CIATÉ. Disponible para nuevas oportunidades.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yeglimar Montanez — Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yeglimar Montanez — Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer especializada en React, React Native, C# y Node.js. Portafolio con proyectos reales.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://yegli.dev",
  },
};

/* Anti-FOUC: only honor an explicit user choice saved in localStorage; default = light */
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

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
              url: "https://yegli.dev",
              mainEntity: {
                "@type": "Person",
                name: "Yeglimar Montanez",
                alternateName: "Yegli",
                jobTitle: "Full Stack Developer & UI/UX Designer",
                description:
                  "Desarrolladora Full Stack e Ingeniera en Computación egresada de la Universidad Rafael Urdaneta. Especializada en React, React Native, C#, Node.js y diseño UI/UX.",
                url: "https://yegli.dev",
                email: "montanezyeglimar4@gmail.com",
                knowsAbout: [
                  "React", "React Native", "TypeScript", "Next.js",
                  "C#", "Node.js", "PostgreSQL", "SQL Server",
                  "UI/UX Design", "Figma",
                ],
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Universidad Rafael Urdaneta",
                  alternateName: "URU",
                },
                sameAs: [
                  "https://github.com/yegli11",
                  "https://www.linkedin.com/in/yeglimar-montanez-b00489216/",
                  "https://www.instagram.com/yegli11/",
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
