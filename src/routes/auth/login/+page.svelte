<script lang="ts">
  import Navbar from "../../../components/Navbar.svelte";
  import LoginForm from "./LoginForm.svelte";
</script>

<div class="w-[100vw] h-[100vh]" data-theme="cupecake">
  <Navbar isLoggedIn={ false } />
  <LoginForm />
</div>
