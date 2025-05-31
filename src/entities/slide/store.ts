import { defineStore } from 'pinia';
import type { Slide } from './types';
import { SlideService } from './service';

export const useSlideStore = defineStore('slideStore', () => {
  const data = ref<Slide[]>([]);
  const service = new SlideService();

  async function init() {
    data.value = await service.loadData();
  }

  return { data, init };
});
