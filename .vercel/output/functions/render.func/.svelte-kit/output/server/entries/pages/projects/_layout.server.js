import { M as MyProjects } from "../../../chunks/MyProjects.js";
const load = async () => {
  let projects = new MyProjects();
  let allProjects = await projects.getAll();
  return {
    projects: allProjects
  };
};
export {
  load
};
