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

   const sendFile = await fetch("http://localhost:3000/uploadFile", {
    method:'POST',
    body: JSON.stringify({
      "FileName": `${ repoForm.projectName.split("/")[1] }.jpg`,
      "FileBlob": repoForm.projectThumb
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const repoData = {
    projectName:    repoForm.projectName,
    projectAvatar:  repoForm.projectAvatar,
    projectDesc:    repoForm.projectDesc,
    projectThumb:   `${ repoForm.projectName }.jpg`,
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

  const sendFile = await fetch("http://localhost:3000/uploadFile", {
    method:'POST',
    body: JSON.stringify({
      "FileName": `${ repoForm.projectName.split("/")[1] }.jpg`,
      "FileBlob": repoForm.projectThumb
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const repoData = {
    projectId:      repoForm.id,
    projectName:    repoForm.projectName,
    projectAvatar:  repoForm.projectAvatar,
    projectDesc:    repoForm.projectDesc,
    projectThumb:   `${ repoForm.projectName }.jpg`,
    readMe:         repoForm.readMe
  }

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
