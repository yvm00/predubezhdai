export interface MacroImages {
  macro1: string;
  macro2: string;
  macro3: string;
}

export interface ProductImages {
  archiveImage: string;
  conceptMainImage: string;
  swatchImage: string;
  productMainImage: string;
  macroImages: MacroImages;
}

export interface ConceptText {
  concept1: string;
  concept2?: string;
  notes?: string;
}

export interface InfoText {
  howToUse: string;
  ingredients: string;
  shelfLife: string;
}

export interface Product {
  id: string;
  title: string;
  volume: string;
  slug: string;
  images: ProductImages;
  conceptText: ConceptText;
  infoText: InfoText;
  desktopPos: { x: number; y: number; width: number };
  scale: number;
}
