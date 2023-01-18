import { PrismaClient } from "@prisma/client"

export class MyProjects {
  async getAll(){
    let prisma = new PrismaClient();
    let allProjects = await prisma.projectsGit.findMany();

    return allProjects;
  }
}
