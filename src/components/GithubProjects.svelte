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

  let file = "";

  const fetchOk:string = '';

  export let gitInfo:githubData;
  let fetchData:RepoInformation = {
    projectDesc:gitInfo.desc,
    projectName:gitInfo.full_name,
    projectAvatar:gitInfo.repoOwner.avatar_url,
  };

  const publishRepoSend = async ( ) => {
    const sendRequest = await fetch('http://localhost:5173/adminpage/gitApi', {
        method: 'POST',
        body:JSON.stringify({
          projectDesc:fetchData.projectDesc,
          projectName:fetchData.projectName,
          projectAvatar:fetchData.projectAvatar
        })
    });
    const response = await sendRequest.json();
    console.log(response)
  }

</script>


<div class="card w-96 border shadow-tw">

<input type="checkbox" id={ gitInfo.full_name } class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
      <h3 class="font-bold text-lg">Weet je zeker dat je { gitInfo.full_name } wilt publishen?</h3>
      <p class="py-4">Weet je zeker dat je deze repo wilt publishen?</p>
      <div class="modal-action">
        <label 
        for={ gitInfo.full_name } 
        class="btn btn-error">Close</label>
        <label 
        for={ gitInfo.full_name } 
        on:click={ publishRepoSend } 
        class="btn btn-success">Publish</label>
      </div>
    </div>
  </div>

  <div class="card-body" >
    <div class="flex gap-2">
    <img  src={gitInfo.repoOwner.avatar_url} class="w-10 rounded-full aspect-auto border object-contain" alt="Github owner icon" />
    <h2 class="card-title">{ gitInfo.full_name }</h2>
    </div>
    <p>{ gitInfo.desc }</p>
    <div class="card-actions justify-end">
      <label for={ gitInfo.full_name } class="btn bg-blue-500">Publish</label>
    </div>
  </div>
</div>
