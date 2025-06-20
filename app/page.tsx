import GenerateField from "@/src/components/GenerateField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Brontë Ipsum | An Alternative Lorem Ipsum Generator',
  description: 'A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters, providing a unique and literary alternative to traditional placeholder text.',
}

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full mx-auto">
      <div>
        <h1>Brontë Ipsum</h1>
        <p className="text-lg mb-6">A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters.</p>
      </div>
      <GenerateField />
    </main>
  );
}
