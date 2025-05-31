import type { Project } from './types';

const BASE_URL = 'https://api.los-bio.ru/projects/';
const BASE_URL_PHOTO = 'https://api.los-bio.ru/files/';

export class ProjectService {
  constructor() {}

  public async loadData(): Promise<Project[]> {
    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const projects: Project[] = [];

      for (const item of data) {
        const project: Project = {
          id: item.id,
          title: item.title,
          slug: item.slug,
          works: item.works,
          equipment: item.equipment,

          shortDescription: item.short_description?.blocks?.length ? item.short_description.blocks[0].data.text : '',

          allDescription:
            item.description?.blocks
              ?.filter((block: any) => block.type === 'paragraph')
              .map((block: any) => block.data.text)
              .filter(Boolean) || [],

          photos:
            item.photos?.map((photo: any) => `${BASE_URL_PHOTO}${photo.catalog}/${photo.name}`).filter(Boolean) || [],
        };

        projects.push(project);
      }
      return projects;
    } catch (error) {
      console.error('Error loading Projects:', error);
      return [];
    }
  }

  // public async getProject(): Promise<Project> {

  // }
}
