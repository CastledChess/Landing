import { Hero } from "@/sections/hero";
import { Navbar } from "@/components/navbar/navbar";
import { About } from "@/sections/about";

export default function Home() {
  return (
    <main className="space-y-4">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
