import { MyProjects } from "../../../classes/github/MyProjects";

export const load = async (params) => {
  let getProject = new MyProjects();
  return {
    currentProject:getProject.getProject(params.projectId)
  }
}
