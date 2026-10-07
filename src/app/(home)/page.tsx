import ArchiveSection from "./ArchiveSection";
import ContextSection from "./ContextSection";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="context">
        <ContextSection />
      </section>

      <section id="archive">
        <ArchiveSection />
      </section>
    </main>
  );
}
