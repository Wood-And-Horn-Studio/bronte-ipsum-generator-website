import GenerateField from "@/src/components/GenerateField";
import { images } from "@/src/lib/images";
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
        <div className="hidden sm:grid sm:grid-cols-5 gap-2">
          {
            images.map((image, index) => (
              <Image
                key={index}
                className="w-full"
                src={image.src}
                alt={image.alt}
                height={600}
                width={400}
                priority
                loading="eager"
              />
            ))
          }
        </div>
        <Image
          className="block sm:hidden w-full"
          src="/The_Brontë_Sisters_by_Patrick_Branwell_Brontë.jpg"
          alt="The Brontë Sisters by Patrick Branwell Brontë"
          height={400}
          width={400}
          priority
          loading="eager"
        />
        <GenerateField />
      </div>
    </main>
  );
}
