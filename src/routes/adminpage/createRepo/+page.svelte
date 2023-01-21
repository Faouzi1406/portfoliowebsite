<script lang="ts">
  import Navbar from "../../../components/Navbar.svelte";
  import SvelteMarkdown from "svelte-markdown";

  export let data:any;
  const user = data.user;

  let source = ``;
  let projectName = ``;
  let file:FileList;
  let image:any = '';
  let projectDesc ='';

  const toBlob = async () => {
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = async () => {
      image = reader.result
    }
  }

  let isOk:any = 'not';

  const save = async () => {
      let saving = await fetch('/adminpage/gitApi', {
          method:"POST",
          body: JSON.stringify({
              projectName:`${user.userName}/${projectName}`,
              readMe:source,
              projectAvatar:"https://avatars.githubusercontent.com/u/93382274?v=4",
              projectDesc,
              projectThumb:image.split(",")[1],
              sessionKey:data.sessionKey
            })
        });
      let jsonSave = await saving.json();
      isOk = isOk.isOk;
      console.log(jsonSave);
  }

</script>

<Navbar 
  isLoggedIn={ user.isValidated }
  userName={ user.userName || '' }
  role={ user.role || 0 }
/>

<div class="px-5 w-screen">
<div class="grid grid-cols-2 auto-cols-max">
  <div>
    <h1 class="font-bold text-xl">Create Repo</h1>
    <div class="flex flex-col px-2">
     <p class="mt-5">Project name</p>
     <input placeholder="Project name"  class="font-semibold px-2 border rounded-md py-2 mt-2" bind:value={ projectName } />
     <p class="mt-5">Project desc</p>
     <input placeholder="Project desc"  class="font-semibold px-2 border rounded-md py-2 mt-2" bind:value={ projectDesc } />
    <div class="flex py-4 gap-2">
     <button class="btn" on:click={() => source += "# Your text here \n"}>Add h1</button>
     <button class="btn" on:click={() => source += "## Your text here \n"}>Add h2</button>
     <button class="btn" on:click={() => source += "```js\n const foo = bar(); \n  ```\n"}>Add js codeblock</button>
    </div>
     <textarea 
     placeholder="README.md" 
     class=" p-2 border rounded h-96" bind:value={ source } /> 
     <input type="file" 
     class="file-input file-input-bordered file-input-info w-full max-w-xs mt-5" 
     accept="image/png, image/jpeg" bind:files={ file }
     on:change={ toBlob }
     />
     <button class="btn mt-5 btn-success" on:click={ save } >Save</button>
     <button class="btn mt-5 btn-error">Close</button>
    </div>

  <div>
    <h1 class="font-bold text-xl mt-5">Thumbmail</h1>
      <img src={ image } alt="image"/>
    </div>
  </div>

  <div class="border h-full p-6 prose prose-stone max-w-full ">
    <SvelteMarkdown {source} />
  </div>

</div>
</div>

  {#if isOk == true}
<div class="alert alert-success shadow-lg absolute top-5 righ-6">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your purchase has been confirmed!</span>
  </div>
</div>
  
  {/if}
