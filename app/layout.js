import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import contactJSON from "./contact.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kim N Livingston's Portfolio",
  description: "Read through Kim's portfolio hosted on GitHub Pages and ultilizing Next.js, React.js, and Tailwind CSSs",
};

const Header = ({className}) => {
  return(
    <header className={className}>
      <p className="grow"><a href="/">{metadata.title}</a></p>
    </header>
  );
}

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`} >
        <Header className="p-4 flex-none flex flex-row border-b" />
        <main className="p-8 flex-grow flex-sm flex-row justify-center">
          {children}
        </main>
        <Footer className="p-3 row-start-3 flex-none flex gap-6 flex-wrap border-t" />
      </body>
    </html>
  );
}
