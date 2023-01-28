import { PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";
import { A as AuthUserSession } from "../../../../chunks/authUser.js";
class GithubFetch {
  async fetchApi(link) {
    const result = await fetch(link);
    const jsonResult = await result.json();
    return jsonResult;
  }
}
class GithubLinkBuilder {
  createLink(apiRequestType) {
    const username = apiRequestType.userName;
    switch (apiRequestType.requestType) {
      case "allRepos":
        return `https://api.github.com/users/${username}/repos`;
      case "readme":
        return `https://api.github.com/repos/${username}/${apiRequestType.reponame}/contents/${apiRequestType.fileName}`;
    }
    throw new Error(`[ GITHUBLINKBUILDER ] : No link found that matches the given parameter ${apiRequestType.requestType}`);
  }
}
class Github extends GithubLinkBuilder {
  async allPubRepos(username) {
    const githubLinkType = { userName: username, requestType: "allRepos" };
    const link = this.createLink(githubLinkType);
    const fetch2 = new GithubFetch();
    const fetchAllRepos = await fetch2.fetchApi(link);
    return fetchAllRepos;
  }
  async reapoReadme(username, repo, fileName) {
    const githubLinkType = { userName: username, requestType: "readme", reponame: repo, fileName };
    const link = this.createLink(githubLinkType);
    const fetch2 = new GithubFetch();
    const fetchReadme = await fetch2.fetchApi(link);
    return { fetch: fetchReadme, link };
  }
}
const GET = async () => {
  const github = new Github();
  const allRepos = await github.allPubRepos("Faouzi1406");
  return new Response(
    JSON.stringify(
      {
        allRepos
      }
    ),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const POST = async (event) => {
  const repoForm = await event.request.json();
  const userSession = new AuthUserSession();
  const user = await userSession.checkSession(repoForm.sessionKey || "");
  if (user.role != 1) {
    return new Response("unauthorized");
  }
  writeFileSync(`static/${repoForm.projectName.split("/")[1]}.jpg`, repoForm.projectThumb, "base64");
  const repoData = {
    projectName: repoForm.projectName,
    projectAvatar: repoForm.projectAvatar,
    projectDesc: repoForm.projectDesc,
    projectThumb: `static/${repoForm.projectName}.jpg`,
    readMe: repoForm.readMe
  };
  const prisma = new PrismaClient();
  const repo = prisma.projectsGit.create({
    data: {
      projectAvatar: repoData.projectAvatar,
      projectDesc: repoData.projectDesc,
      projectName: repoData.projectName,
      projectReadme: repoData.readMe,
      projectThumb: repoData.projectThumb
    }
  });
  let response = {
    isOk: false
  };
  await repo.then((e) => {
    response.isOk = true;
    prisma.$disconnect();
  }).catch((e) => {
    response.isOk = false;
    prisma.$disconnect();
  });
  return new Response(
    JSON.stringify(response)
  );
};
const PUT = async (event) => {
  const repoForm = await event.request.json();
  const userSession = new AuthUserSession();
  const user = await userSession.checkSession(repoForm.sessionKey || "");
  if (user.role != 1) {
    return new Response("unauthorized");
  }
  console.log(repoForm.projectThumb);
  writeFileSync(`static/${repoForm.projectName.split("/")[1]}.jpg`, repoForm.projectThumb, "base64");
  const repoData = {
    projectId: repoForm.id,
    projectName: repoForm.projectName,
    projectAvatar: repoForm.projectAvatar,
    projectDesc: repoForm.projectDesc,
    projectThumb: `static/${repoForm.projectName}.jpg`,
    readMe: repoForm.readMe
  };
  console.log(repoData);
  const prisma = new PrismaClient();
  const repo = prisma.projectsGit.update({
    where: {
      id: repoData.projectId
    },
    data: {
      projectAvatar: repoData.projectAvatar,
      projectDesc: repoData.projectDesc,
      projectName: repoData.projectName,
      projectReadme: repoData.readMe,
      projectThumb: repoData.projectThumb
    }
  });
  let response = {
    isOk: false
  };
  await repo.then((e) => {
    response.isOk = true;
    prisma.$disconnect();
  }).catch((e) => {
    response.isOk = false;
    prisma.$disconnect();
  });
  return new Response(
    JSON.stringify(response)
  );
};
export {
  GET,
  POST,
  PUT
};
