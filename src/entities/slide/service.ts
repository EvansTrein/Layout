import type { Slide } from './types';

const BASE_URL = 'https://api.los-bio.ru/info/group/slide';

export class SlideService {
  private localImages = [
    'https://api.los-bio.ru/files/products/d4445e32-0a4e-4a6b-a915-e21b90d82637.webp',
    'https://api.los-bio.ru/files/products/c003f978-94d9-4d43-afec-c1d007f7bddb.webp',
    'https://api.los-bio.ru/files/products/8ad5356a-605a-49aa-b37a-59204240c87a.webp',
  ];

  constructor() {}

  public async loadData(): Promise<Slide[]> {
    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.map((item: any, index: number) => {
        const value = JSON.parse(item.value);
        return {
          id: value.id,
          title: value.title,
          description: value.description,
          image: this.getImageUrl(index),
        };
      });
    } catch (error) {
      console.error('Error loading slides:', error);
      return [];
    }
  }

  private getImageUrl(index: number): string {
    return this.localImages[index] || this.localImages[0];
  }
}
