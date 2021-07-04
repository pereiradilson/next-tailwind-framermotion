import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type CardProps = {
  href: string;
  source: string;
  layoutId: string;
};

export default function Card({ href, source, layoutId }: CardProps) {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img
          src={source}
          alt="Next.js"
          className="w-full h-full"
          layoutId={layoutId}
        />
      </div>
    </Link>
  );
}
