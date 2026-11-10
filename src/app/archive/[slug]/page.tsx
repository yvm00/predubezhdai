import { notFound } from 'next/navigation';
import { productsData } from '@/src/data/productsData';
import ConceptSection from './ConceptSection';
import InfoSection from './InfoSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const product = productsData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className='w-full realtive'>
      <ConceptSection product = {product}/>
      <InfoSection product = {product} />
    </main>
  );
}

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}