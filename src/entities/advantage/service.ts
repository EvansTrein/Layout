import type { Advantage } from './types';

const BASE_URL = 'https://api.los-bio.ru/info/group/advantage';

export class AdvantageService {
  constructor() {}

  public async loadData(): Promise<Advantage[]> {
    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.map((item: any) => {
        const value = JSON.parse(item.value);
        return {
          id: value.id,
          title: value.title,
          description: value.description,
          icon: value.icon,
        };
      });
    } catch (error) {
      console.error('Error loading Advantages:', error);
      return [];
    }
  }
}
