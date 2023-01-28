<script lang="ts">
  import Navbar from "../../../components/Navbar.svelte";
  import SvelteMarkdown from "svelte-markdown";

  export let data: any;
  const user = data.user;

  let source = ``;
  let projectName = ``;
  let file: FileList;
  let image: any = "/selectImage.png";
  let projectDesc = "";

  const toBlob = async () => {
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = async () => {
      image = reader.result;
    };
  };

  let isOk: any = false;

  const save = async () => {
    let saving = await fetch("/adminpage/gitApi", {
      method: "POST",
      body: JSON.stringify({
        projectName: `${user.userName}/${projectName}`,
        readMe: source,
        projectAvatar: "https://avatars.githubusercontent.com/u/93382274?v=4",
        projectDesc,
        projectThumb: image.split(",")[1],
        sessionKey: data.sessionKey,
      }),
    });

    if (saving.ok) {
      isOk ='send'
    } else{
      isOk = 'error'
    }
    let jsonSave = await saving.json();
    console.log(jsonSave);
  };

  const openImage = () => {
    let image = document.getElementById("imageSelect");
    image?.click();
  };
</script>

<Navbar
  isLoggedIn={user.isValidated}
  userName={user.userName || ""}
  role={user.role || 0}
/>

<div class="px-5 w-screen">
  <div class="flex flex-col items-center">
    <div class="image w-2/3 h-full flex flex-col items-center">
      <div class="relative w-full">
        <img
          src={image}
          class="w-full h-96 object-cover"
          on:click={openImage}
        />

        <input
          type="file"
          class="hidden file-input file-input-bordered file-input-info w-full max-w-xs mt-5" 
          accept="image/png, image/jpeg"
          bind:files={file}
          on:change={toBlob}
          id="imageSelect"
        />
        <div
          class="absolute bottom-0 text-white w-full backdrop-blur-xl bg-black/30 p-2 flex"
        >
          <input
            placeholder="Project name"
            class="font-semibold bg-transparent text-white  rounded-md  mt-2 focus:outline-none text-2xl placeholder:text-white "
            bind:value={projectName}
          />
          <div class="absolute right-0 flex items-center gap-2">
            <img
              src={"/selectImage.png"}
              class="w-10 rounded-full border aspect-square"
              alt="profiel foto"
            />
            <p class=" mr-5 first-letter:capitalize">{user.userName}</p>
          </div>
        </div>
      </div>
      <textarea
        placeholder="Project desc"
        class="font-semibold px-2 border rounded-md py-2 mt-2 w-full focus:outline-none mb-2 dark:bg-gray-500  dark:text-white"
        bind:value={projectDesc}
      />
      <textarea
        placeholder="README.md"
        class=" p-2 border rounded h-96 w-full dark:bg-gray-500 dark:text-white"
        bind:value={source}
      />
      <button class="btn mt-5 btn-success w-full" on:click={save}>Save</button>
    </div>
    <!-- <div class="border h-full p-6 prose prose-stone max-w-full "> -->
    <!--   <SvelteMarkdown {source} /> -->
    <!-- </div> -->
  </div>
</div>

{#if isOk == 'send'}
<div class="absolute alert alert-success top-10 w-fit text-white mt-5">
  <p class="font-semibold">Saved...</p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil-square"
    viewBox="0 0 16 16"
  >
    <path
      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    />
    <path
      fill-rule="evenodd"
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>
</div>
{/if}
