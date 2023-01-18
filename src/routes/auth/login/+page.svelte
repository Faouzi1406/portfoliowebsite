<script lang="ts">
  import Navbar from "../../../components/Navbar.svelte";
  import LoginForm from "./LoginForm.svelte";
</script>

<div class="w-[100vw] h-[100vh]">
  <Navbar isLoggedIn={ false } />
  <LoginForm />
</div>
