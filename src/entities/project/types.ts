export interface Project {
  id: number; // id
  title: string; // title
  shortDescription: string; // short_description -> blocks -> data -> text
  equipment: string; // equipment
  allDescription: string[]; // description  -> blocks -> data -> text
  works: string; // works
  slug: string; // slug
	photos: string[]; // photos -> catalog + '/' + name 
}
