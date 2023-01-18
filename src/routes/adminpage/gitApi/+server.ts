import { PrismaClient } from '@prisma/client';
import type { RepoInformation } from 'src/types/RepoTypes';
import { Github } from '../../../classes/github/githubClass';

export const GET = async () => {
  const github = new Github(); 
  const allRepos = await github.allPubRepos('Faouzi1406');

  return new Response(
    JSON.stringify({
    allRepos
    },
    ),
    {
      headers: {
          'Content-Type': 'application/json'
      }
    }
  )
}

// Save repo to db published
export const POST = async (event:any) => {
  const repoForm = await event.request.json();
  const repoData:RepoInformation = {
    projectName: repoForm.projectName,
    projectAvatar: repoForm.projectAvatar,
    projectDesc:   repoForm.projectDesc
  }

  // Push to database
  const prisma = new PrismaClient();
  const repo = prisma.projectsGit.create({
    data:{
      projectAvatar:repoData.projectAvatar,
      projectDesc:repoData.projectDesc,
      projectName:repoData.projectName
    }
  });

  let response = {
    isOk:false,
  }

  let repoInfo =  await repo.then(e => {
    response.isOk = true;
    prisma.$disconnect();
  }).catch(e => {
      response.isOk = false;
      prisma.$disconnect();
  });

  return new Response(
    JSON.stringify(response)
  );
}

