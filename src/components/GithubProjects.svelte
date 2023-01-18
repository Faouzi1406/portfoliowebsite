<script lang="ts">
  import type { RepoInformation } from "../types/RepoTypes";

  type owner = {
    login:string, 
    avatar_url:string
  };

  type githubData = {
    name:string,
    full_name:string,
    desc:string,
    repoOwner:owner
  };

  const fetchOk:string = '';

  export let gitInfo:githubData;
  let fetchData:RepoInformation = {
    projectDesc:gitInfo.desc,
    projectName:gitInfo.full_name,
    projectAvatar:gitInfo.repoOwner.avatar_url
  };

  const publishRepo = async ( element:MouseEvent ) => {
    const sendRequest = await fetch('http://localhost:5173/adminpage/gitApi', {
        method: 'POST',
        body:JSON.stringify(fetchData)
    });
    const response = await sendRequest.json();
    console.log(response)
  }

</script>


<div class="card w-96 border shadow-xl">
  <div class="card-body" >
    <div class="flex gap-2">
    <img  src={gitInfo.repoOwner.avatar_url} class="w-10 rounded-full aspect-auto border object-contain" alt="Github owner icon" />
    <h2 class="card-title">{ gitInfo.full_name }</h2>
    </div>
    <p>{ gitInfo.desc }</p>
    <div class="card-actions justify-end">
      <button 
      class="btn bg-blue-500"
      on:click={e => publishRepo(e)}
      >Publish</button>
    </div>
  </div>
</div>
