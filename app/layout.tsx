import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import "nextra-theme-docs/style.css";
import { ThemeImage } from "@/components/themeImage/theme-image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Castled",
  description: "Chess analysis, for free, for everyone",
};

const navbar = (
  <Navbar
    logo={
      <span className="text-xl font-bold flex gap-2 ">
        <ThemeImage
          darkImage={{
            src: "/logo.svg",
            alt: "Castled",
            width: 30,
            height: 30,
          }}
          lightImage={{
            src: "/logo-light.svg",
            alt: "Castled",
            width: 30,
            height: 30,
          }}
        />
        Castled
      </span>
    }
  />
);
const footer = <Footer>{new Date().getFullYear()} © Castled.</Footer>;

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
