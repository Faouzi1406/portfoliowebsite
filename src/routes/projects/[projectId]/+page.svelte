<script>
  import Navbar from "../../../components/Navbar.svelte";
  import SvelteMarkdown from "svelte-markdown";

  export let data;
  const user = data.user;
  const projects = data.currentProject;
  const source = projects.projectReadme;
  console.log(projects);
</script>

<svelte:head>
  <title>
    {projects.projectName.split("/")[1]} - {projects.projectName.split("/")[0]}
  </title>
</svelte:head>

<Navbar
  isLoggedIn={user.isValidated}
  userName={user.userName || ""}
  role={user.role || 0}
/>

<div class="relative">
  {#if user.role == 1}
    <a
      class="border h-fit py-2 px-4 btn-outline rounded-md top-5  w-fit absolute left-5"
      href={ `/projects/edit/${projects.id}` }
    >
      Edit
    </a>
  {/if}
</div>

<div class="flex justify-center  h-screen">
  <article class="sm:w-full lg:w-2/3 md:w-3/3 border-x">
    <div class="relative">
      <img
        src={`http://localhost:3000/getfile/${projects.projectThumb.split("/")[1]}`}
        class="w-full h-[500px] object-cover"
        alt="Thumbmail"
      />

      <div
        class="absolute bottom-0 text-white w-full backdrop-blur-xl bg-black/30 p-2 flex"
      >
        <h1 class="text-3xl first-letter:capitalize">
          {projects.projectName.split("/")[1]}
        </h1>
        <div class="absolute right-0 flex items-center gap-2">
          <img
            src={projects.projectAvatar}
            class="w-10 rounded-full border"
            alt="profiel foto"
          />
          <p class=" mr-5 first-letter:capitalize">
            {projects.projectName.split("/")[0]}
          </p>
        </div>
      </div>
    </div>

    <div class="py-2 px-2  prose max-w-full text-black dark:text-white">
      <SvelteMarkdown {source} />
    </div>
  </article>
</div>
