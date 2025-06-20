import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bronte Ipsum | A Lorem Ipsum Generator',
  description: 'A Lorem Ipsum alternative generator that uses text from the works of the Brontë sisters, providing a unique and literary alternative to traditional placeholder text.',
}

export default function Home() {
  return (
    <div>
      <h1>Bronte Ipsum</h1>
    </div>
  );
}
