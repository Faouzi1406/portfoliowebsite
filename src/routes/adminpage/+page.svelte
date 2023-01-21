<script lang="ts">
    import Navbar from "../../components/Navbar.svelte";
    import type { AuthUserSessionOk } from "../../types/AuthResponses";

    export let data;
    const user:AuthUserSessionOk = data.user;
</script>

<div class="h-screen">
    <Navbar isLoggedIn={user.isValidated} userName={ user.userName || '' } role={ user.role || 0 }/>
    <div class="flex p-2 items-center">
    <div class="auto-cols-max flex flex-wrap gap-5 justify-center">
      
    </div>
      <a class="btn" href="/adminpage/createRepo">Create repo +</a>
    </div>
</div>
