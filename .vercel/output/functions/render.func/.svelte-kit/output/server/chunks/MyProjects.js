import { PrismaClient } from "@prisma/client";
class MyProjects {
  async getAll() {
    let prisma = new PrismaClient();
    let allProjects = await prisma.projectsGit.findMany();
    return allProjects;
  }
  async getProject(this_id) {
    let prisma = new PrismaClient();
    let project = prisma.projectsGit.findUnique({
      where: {
        id: this_id
      }
    });
    let data;
    await project.then((e) => {
      data = e;
    }).catch((e) => {
      console.log(e);
      data = { project: "not found" };
    });
    return data;
  }
}
export {
  MyProjects as M
};
