import { PrismaClient } from '@prisma/client';
import { writeFileSync } from 'fs';
import type { RepoInformation } from 'src/types/RepoTypes';
import { Github } from '../../../classes/github/githubClass';
import { AuthUserSession } from '../../../classes/auth/authUser';

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

  const userSession = new AuthUserSession(); 
  const user = await userSession.checkSession(repoForm.sessionKey || '');

  if(user.role != 1){
    return new Response("unauthorized")
  }

  writeFileSync(`static/${ repoForm.projectName.split("/")[1] }.jpg`, repoForm.projectThumb, 'base64' );
  
  const repoData:RepoInformation = {
    projectName:    repoForm.projectName,
    projectAvatar:  repoForm.projectAvatar,
    projectDesc:    repoForm.projectDesc,
    projectThumb:   `static/${ repoForm.projectName }.jpg`,
    readMe:         repoForm.readMe
  }

  // Push to database
  const prisma = new PrismaClient();
  const repo = prisma.projectsGit.create({
    data:{
      projectAvatar:repoData.projectAvatar,
      projectDesc:repoData.projectDesc,
      projectName:repoData.projectName,
      projectReadme:repoData.readMe,
      projectThumb:repoData.projectThumb
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

//Editing
export const PUT = async (event:any) => {
  const repoForm = await event.request.json();

  const userSession = new AuthUserSession(); 
  const user = await userSession.checkSession(repoForm.sessionKey || '');

  if(user.role != 1){
    return new Response("unauthorized")
  }

  console.log(repoForm.projectThumb);

  writeFileSync(`static/${ repoForm.projectName.split("/")[1] }.jpg`, repoForm.projectThumb, 'base64' );
  
  const repoData = {
    projectId:      repoForm.id,
    projectName:    repoForm.projectName,
    projectAvatar:  repoForm.projectAvatar,
    projectDesc:    repoForm.projectDesc,
    projectThumb:   `static/${ repoForm.projectName }.jpg`,
    readMe:         repoForm.readMe
  }

  console.log(repoData);

  // Push to database
  const prisma = new PrismaClient();
  const repo = prisma.projectsGit.update({
    where:{
      id: repoData.projectId
    },
    data:{
      projectAvatar:repoData.projectAvatar,
      projectDesc:repoData.projectDesc,
      projectName:repoData.projectName,
      projectReadme:repoData.readMe,
      projectThumb:repoData.projectThumb
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
