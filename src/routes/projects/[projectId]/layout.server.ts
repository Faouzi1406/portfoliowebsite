import { MyProjects } from "../../../classes/github/MyProjects";

export const load = async ({ params }) => {
  let getProject = new MyProjects();
  console.log(params.projectId);
  return {
    project:getProject.getProject(params.projectId)
  }
}
