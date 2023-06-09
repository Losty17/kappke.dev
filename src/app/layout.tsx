import { Montserrat } from "next/font/google";
import "./globals.scss";
import { AdminProvider, NextAuthProvider } from "./providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "kappke.dev",
  description: "Portfolio",
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.className} font-montserrat scroll-smooth`}>
        <NextAuthProvider>
          <AdminProvider>{children}</AdminProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
};
