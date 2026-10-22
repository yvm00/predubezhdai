export interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  desktopPos: {
    x: number;
    y: number;
    width: number;
  };
  scale: number;
}
