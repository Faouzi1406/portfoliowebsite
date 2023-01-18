<script lang="ts">
    import IndexBody from "../components/IndexBody.svelte";
    import Navbar from "../components/Navbar.svelte";
    import type { AuthUserSessionOk } from "../types/AuthResponses";

    export let data;
    const user:AuthUserSessionOk = data.user;
</script>

<div class="h-screen">
  <Navbar isLoggedIn={ user.isValidated } userName={ user.userName || '' }/>
  <IndexBody />
</div>
