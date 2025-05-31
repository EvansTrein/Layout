import { defineStore } from 'pinia';
import type { Advantage } from './types';
import { AdvantageService } from './service';

export const useAdvantageStore = defineStore('advantageStore', () => {
  const data = ref<Advantage[]>([]);
  const service = new AdvantageService();

  async function init() {
    data.value = await service.loadData();
  }

  return { data, init };
});