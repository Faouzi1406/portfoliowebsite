<script lang="ts">
    import Navbar from "../..//components/Navbar.svelte";
    import type { AuthUserSessionOk } from "../../types/AuthResponses";

    export let data;
    const user:AuthUserSessionOk = data.user;
</script>

<div class="h-screen" data-theme="cupcake">
    <Navbar isLoggedIn={user.isValidated}/>
</div>
