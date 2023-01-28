import { M as MyProjects } from "../../../../chunks/MyProjects.js";
const load = async ({ params }) => {
  let getProject = new MyProjects();
  return {
    currentProject: Promise.resolve(getProject.getProject(parseInt(params.projectId)))
  };
};
export {
  load
};
