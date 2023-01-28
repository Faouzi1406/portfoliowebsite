<script lang="ts">
    import IndexBody from "../components/IndexBody.svelte";
    import Navbar from "../components/Navbar.svelte";
    import type { AuthUserSessionOk } from "../types/AuthResponses";
    import NavMenu from "../components/NavMenu.svelte";

    export let data:any;
    const user:AuthUserSessionOk = data.user;
</script>


<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="h-screen">
  <Navbar 
  isLoggedIn={ user.isValidated } 
  userName={ user.userName || '' } 
  role={ user.role || 0 }/>
  <IndexBody data={ data } />
  <NavMenu />
</div>
