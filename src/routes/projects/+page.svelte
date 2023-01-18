<script lang="ts">
  import Navbar from "../../components/Navbar.svelte";
  import type { AuthUserSessionOk } from "../../types/AuthResponses";

  export let data;
  const user:AuthUserSessionOk = data.user;
</script>

<Navbar 
  isLoggedIn={ user.isValidated }
  userName={ user.userName || '' }
  role={ user.role || 0 }
/>

<div>

</div>
