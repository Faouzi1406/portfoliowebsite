<script lang="ts">
    import GithubProjects from "../../components/GithubProjects.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import type { AuthUserSessionOk } from "../../types/AuthResponses";
    import type { RepoInformation } from "../../types/RepoTypes";

    export let data;
    const user:AuthUserSessionOk = data.user;
    const repos = data.gitRepos;

</script>

<div class="h-screen">
    <Navbar isLoggedIn={user.isValidated} userName={ user.userName || '' } role={ user.role || 0 }/>
    
    <div class="flex items-center justify-center py-2">
    <div class="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-2  auto-cols-max">
      {#each repos as repo }
        <GithubProjects gitInfo={ { 
          name: repo.name, 
          full_name: repo.full_name,
          desc: repo.description,
          repoOwner: {
            login: repo.owner.login,
            avatar_url: repo.owner.avatar_url
          }
          }}  />
      {/each}
    </div>
    </div>
</div>
