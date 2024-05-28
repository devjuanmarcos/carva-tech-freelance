import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { Anek_Bangla, Space_Grotesk } from "next/font/google";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
  variable: "--font-anek-bangla",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const APP_NAME = "CarvaTech App";
const APP_DEFAULT_TITLE = "CarvaTech - Soluções Inovadoras";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "A sua solução para o seu setup!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localst.j:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={`${anekBangla.variable} ${grotesk.variable} ${poppins.variable}`}>
        <Header />
        <main
          className="flex flex-col mb-20 gap-[45px] py-[16px]"
          tabIndex={0}
          id="main-content"
          aria-label="Você está no conteúdo principal"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
