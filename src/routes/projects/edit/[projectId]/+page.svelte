<script lang="ts">
  import Navbar from "../../../../components/Navbar.svelte";
  export let data: any;
  const user = data.user;
  let currentProject = data.currentProject;

  const save = async () => {
    let saving = await fetch("/adminpage/gitApi", {
      method: "PUT",
      body: JSON.stringify({
        id:currentProject.id,
        projectName: `${user.userName}/${currentProject.projectName.split("/")[1]}`,
        readMe: currentProject.projectReadme,
        projectAvatar: "https://avatars.githubusercontent.com/u/93382274?v=4",
        projectDesc: currentProject.projectDesc,
        projectThumb: currentProject.projectThumb,
        sessionKey: data.sessionKey
      }),
    });
    console.log(saving);
  };

  let cur_project = '/' + currentProject.projectThumb.split("/")[1];

  const to_blob = () => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(currentProject.projectThumb[0]);
    cur_project = URL.createObjectURL(currentProject.projectThumb[0]);

    fileReader.onload = (e)  => {
     currentProject.projectThumb =  e.target?.result.split(",")[1];
    }
  }

  $: console.log(currentProject.projectName);
  

  const openImageSelect = () => {
    let open = document.querySelector("#openFile");
    //@ts-ignore
    open.click();
  }
</script>

<Navbar
  isLoggedIn={user.isValidated}
  userName={user.userName || ""}
  role={user.role || 0}
/>
<div class="px-3 ">
  <div class="w-full flex items-center relative flex-col ">
  <input type="file" accept="image/png, image/jpg" class="hidden" bind:files={ currentProject.projectThumb }  id="openFile" on:change={ to_blob }/>
    <img
      src={`http://localhost:3000/getfile${ cur_project }`}
      class="w-full aspect-square h-52 object-cover"
      on:click={ openImageSelect }
    />
    <div class="absolute bottom-0 backdrop-blur-0 bg-white/30 w-full p-2">
      <input bind:value={currentProject.projectName} class="p-1 input border" />
    </div>
  </div>
  <div class="mt-5">
    <p>Omschrijfing</p>
    <textarea
      bind:value={currentProject.projectDesc}
      class="w-full border p-2 rounded-md"
    />
  </div>
  <div>
    <p>Readme</p>
    <textarea
      bind:value={currentProject.projectReadme}
      class="w-full border p-2 rounded-md"
    />
  </div>
  <button class="btn w-full btn-success text-white" on:click={save}>Save</button>
</div>
