import { MyProjects } from '../../classes/github/MyProjects';

export const load = async () => {
  let projects = new MyProjects(); 
  let allProjects = await projects.getAll();

  return {
    projects:allProjects
  }
}
