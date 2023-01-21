<script lang="ts">
  import Projects from "../../components/Projects.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import type { AuthUserSessionOk } from "../../types/AuthResponses";
  import NavMenu from "../../components/NavMenu.svelte";

  export let data;
  const user:AuthUserSessionOk = data.user;
  const projects:[] =  data.projects;
  let searchProjects = data.projects;

  let searchQuery = '';
  const searchProject = () => {
     searchProjects =  projects.filter(x => x.projectName.toLowerCase().match(searchQuery.toLowerCase()))

   //If search on name is 0 search based on project description
    if(searchProjects.length == 0 ){
     searchProjects =  projects.filter(x => x.projectDesc.toLowerCase().match(searchQuery.toLowerCase()))
    }
  }
</script>

<NavMenu />

<Navbar 
  isLoggedIn={ user.isValidated }
  userName={ user.userName || '' }
  role={ user.role || 0 }
/>

<div class="flex justify-end pr-5 mb-2">
<input 
placeholder="Search..."  
class="font-sans text-lg focus:outline-none border rounded py-1 px-2 w-80"
bind:value={searchQuery}
on:input={searchProject}
/>
</div>

<div class="flex flex-wrap px-2 gap-3 items-center justify-center">
  {#each searchProjects as project}
    <Projects projects={ project }  />
  {/each}
</div>

