import { defineStore } from 'pinia';
import type { Project } from './types';
import { ProjectService } from './service';

export const useProjectStore = defineStore('ProjectStore', () => {
  const data = ref<Project[]>([]);
  const service = new ProjectService();

  async function init() {
    data.value = await service.loadData();
  }

  return { data, init };
});