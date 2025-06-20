import GenerateField from "@/src/components/GenerateField";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Brontë Ipsum | An Alternative Lorem Ipsum Generator',
  description: 'A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters, providing a unique and literary alternative to traditional placeholder text.',
}

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full mx-auto justify-between md:justify-end">
      <div>
        <h1>Brontë Ipsum</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between">
          <p className="text-lg">A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters.</p>
          <p>Created by <Link className="underline" href="https://woodandhorn.studio" target="_blank">Wood & Horn Studio</Link></p>
        </div>
      </div>
      <div>
        <div className="hidden md:grid md:grid-cols-3 gap-2">
          <Image
            className="w-full"
            src="/Charlotte_Bronte_by_George_Richmond.jpg"
            alt="Charlotte Brontë by George Richmond"
            height={600}
            width={400}
            priority
            loading="eager"
          />
          <Image
            className="w-full"
            src="/Charlotte_Brontë_by_Patrick_Branwell_Brontë_restored.jpg"
            alt="Charlotte Brontë by Patrick Branwell Brontë"
            height={600}
            width={400}
            priority
            loading="eager"

          />
          <Image
            className="w-full"
            src="/The_Brontë_Sisters_by_Patrick_Branwell_Brontë.jpg"
            alt="The Brontë Sisters by Patrick Branwell Brontë"
            height={600}
            width={400}
            priority
            loading="eager"
          />
        </div>
        <GenerateField />
      </div>
    </main>
  );
}
