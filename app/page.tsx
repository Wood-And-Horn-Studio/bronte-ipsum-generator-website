import GenerateField from "@/src/components/GenerateField";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Brontë Ipsum | An Alternative Lorem Ipsum Generator',
  description: 'A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters, providing a unique and literary alternative to traditional placeholder text.',
}

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full mx-auto">
      <div>
        <h1>Brontë Ipsum</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between">
          <p className="text-lg">A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters.</p>
          <p>Created by <Link className="underline" href="https://woodandhorn.studio" target="_blank">Wood & Horn Studio</Link></p>
        </div>
      </div>
      <GenerateField />
    </main>
  );
}
