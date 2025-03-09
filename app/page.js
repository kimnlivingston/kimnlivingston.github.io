import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
      <div className="flex flex-row gap-4 items-center">
        <Link
          className="p-2 flex flex-col items-center gap-2"
          href="/resume"
          replace
        >
          <Image
            aria-hidden
            src="/resume.svg"
            alt="Resume icon"
            width={32}
            height={32}
          />
          <span>View Resume</span>
        </Link>
      </div>
  )
}
