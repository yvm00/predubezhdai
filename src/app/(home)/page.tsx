import Transition from '@/src/components/Transition';
import ArchiveSection from './ArchiveSection';
import ContextSection from './ContextSection';
import HeroSection from './HeroSection';
import { productsData } from '@/src/data/productsData';

export default function Home() {
  return (
    <main>
      <Transition>
        <div className='relative'>
          <HeroSection />
          <ContextSection />
        </div>
        <ArchiveSection products={productsData} />
      </Transition>
    </main>
  );
}
