import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="/">
        <a className="cursor-pointer">
          <Image src="/logo.svg" width={150} height={33} alt="DOWhile2020" />
        </a>
      </Link>

      <nav className="hidden md:block space-x-8">
        <Link href="nextjs">
          <a className="tracking-wide hover:text-gray-300 transition duration-200">
            Next.js
          </a>
        </Link>
        <Link href="tailwind">
          <a className="tracking-wide hover:text-gray-300 transition duration-200">
            Tailwind
          </a>
        </Link>
        <Link href="framer-motion">
          <a className="tracking-wide hover:text-gray-300 transition duration-200">
            Framer Motion
          </a>
        </Link>
      </nav>
    </header>
  );
}
