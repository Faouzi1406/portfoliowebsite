import { PrismaClient } from "@prisma/client"

export class MyProjects {
  async getAll(){
    let prisma = new PrismaClient();
    let allProjects = await prisma.projectsGit.findMany();

    return allProjects;
  }
  
  async getProject(id:number) {
    let prisma = new PrismaClient();
    let project = prisma.projectsGit.findUnique({
      where: {
        id
      }
    })

    let data;
    
    project.then(e => {
      data = e;
    }).catch(e => {
        data = { project: "not found" };
    })

    return data;
  }
}
