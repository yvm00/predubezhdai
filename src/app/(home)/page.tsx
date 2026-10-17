import Transition from '@/src/components/Transition';
import ArchiveSection from './ArchiveSection';
import ContextSection from './ContextSection';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Transition>
        <ContextSection />
        <ArchiveSection />
      </Transition>
    </main>
  );
}
