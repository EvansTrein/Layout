import { defineStore } from 'pinia';
import type { Project } from './types';
import { ProjectService } from './service';

export const useProjectStore = defineStore('ProjectStore', () => {
  const data = ref<Project[]>([]);
  const project = ref<Project>();
  const service = new ProjectService();

  async function init() {
    data.value = await service.loadData();
  }

  async function getProject(slug: string | string[]) {
		project.value = {} as Project;
    project.value = await service.getProject(slug);
  }

  return { data, init, getProject, project };
});
