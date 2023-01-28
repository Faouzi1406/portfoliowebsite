<script lang="ts">
  import Projects from "../../components/Projects.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import type { AuthUserSessionOk } from "../../types/AuthResponses";

  export let data;
  const projects = data.projects;
  const user: AuthUserSessionOk = data.user;
</script>

<div class="h-screen">
  <Navbar
    isLoggedIn={user.isValidated}
    userName={user.userName || ""}
    role={user.role || 0}
  />
  <div class="flex p-2 items-center">
    <div class="auto-cols-max flex flex-wrap gap-5 justify-center" />
    <a class="btn" href="/adminpage/createRepo">Create repo +</a>
  </div>

  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2 lg:grid-cols-3">
      {#each projects as project}
        <Projects projects={project} />
      {/each}
    </div>
  </div>
</div>
