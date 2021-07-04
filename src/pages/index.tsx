import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 grid-rows-1">
        <Card href="/nextjs" source="/nextjs.svg" layoutId="nextjs-logo" />
        <Card
          href="/tailwind"
          source="/tailwind.svg"
          layoutId="tailwind-logo"
        />
        <Card
          href="/framer-motion"
          source="/framermotion.svg"
          layoutId="framermotion-logo"
        />
      </div>
    </div>
  );
}
