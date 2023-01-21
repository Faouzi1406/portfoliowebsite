import type { GithubAPIRequestLink } from "../../types/GithubLinkTypes";

class GithubFetch {
  async fetchApi(link:string):Promise<JSON> {
    const result = await fetch(link);
    const jsonResult = await result.json();
    return jsonResult;
  }
}

class GithubLinkBuilder {
  createLink(apiRequestType:GithubAPIRequestLink):string{
    const username = apiRequestType.userName;

    switch(apiRequestType.requestType) {
      case "allRepos": 
        return `https://api.github.com/users/${username}/repos`
      case "readme": 
        return `https://api.github.com/repos/${username}/${apiRequestType.reponame}/contents/${apiRequestType.fileName}`
    }

    throw new Error(`[ GITHUBLINKBUILDER ] : No link found that matches the given parameter ${ apiRequestType.requestType }`);
  } 
}

export class Github extends GithubLinkBuilder {
  async allPubRepos(username:string):Promise<JSON>{
    const githubLinkType:GithubAPIRequestLink = { userName:username, requestType:'allRepos'};
    const link = this.createLink(githubLinkType);

    const fetch = new GithubFetch();
    const fetchAllRepos = await fetch.fetchApi(link)

    return fetchAllRepos;
  }

  async reapoReadme(username:string, repo:string, fileName:string):Promise<{fetch:JSON, link:string}> {
    const githubLinkType:GithubAPIRequestLink = { userName:username, requestType:'readme', reponame:repo, fileName:fileName};
    const link = this.createLink(githubLinkType);
    
    const fetch  = new GithubFetch();
    const fetchReadme = await fetch.fetchApi(link);

    return {fetch: fetchReadme, link};
  }
}
