import { defineStore } from 'pinia';
import type { Project } from './types';
import { ProjectService } from './service';

export const useProjectStore = defineStore('ProjectStore', () => {
  const data = ref<Project[]>([]);
  const project = ref<Project>();
  const service = new ProjectService();
  const isLoad = ref<boolean>(false);

  async function init() {
    data.value = await service.loadData();
  }

  async function getProject(slug: string | string[]) {
    isLoad.value = false;
    project.value = {} as Project;
    project.value = await service.getProject(slug);
    isLoad.value = true;
  }

  return { data, init, getProject, project, isLoad };
});
