import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import referenceJSON from "./reference.json"
import Link from 'next/link'
// import { usePathname } from 'next/navigation'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "kimnlivingston",
  description: "Read through Kim's portfolio hosted on GitHub Pages and ultilizing Next.js, React.js, and Tailwind CSSs",
}

const Header = ({className}) => {
  return(
    <header className={className}>
      <Link href="/" replace>
        {/* {metadata.title} */}
        <Image
          aria-hidden
          src="/logo.svg"
          alt={`site icon`}
          title="kimnlivingston"
          width={70}
          height={70}
        />
      </Link>
    </header>
  )
}

// const Breadcrumb = (pathName) => {
//   console.log("pathName",pathName);
// }

const Footer = ({className}) => {
  let contacts = [];
  referenceJSON.forEach((reference) => {
    contacts.push(
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={reference.href}
        key={reference.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={`/${reference.icon}.svg`}
          alt={`${reference.name} icon`}
          title={reference.name}
          width={20}
          height={20}
        />
        <span>{reference.name}</span>
      </a>
    )
  })
  return (
    <footer className={className}>
      {contacts}
    </footer>
  )
}

export default function RootLayout({ children }) {
  // const paths = usePathname()
  // console.log("paths", paths)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]`} >
        <Header className="p-4 flex flex-row" />
        <main className="p-8 flex-grow flex flex-row justify-center">
          {/* <Breadcrumb pathName={paths} /> */}
          {children}
        </main>
        <Footer className="p-4 flex flex-row flex-wrap justify-center gap-6" />
      </body>
    </html>
  )
}
