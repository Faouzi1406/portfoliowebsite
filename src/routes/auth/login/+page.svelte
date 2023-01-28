<script lang="ts">
  import NavMenu from "../../../components/NavMenu.svelte";
  import Navbar from "../../../components/Navbar.svelte";
  import LoginForm from "./LoginForm.svelte";
</script>

<NavMenu />

<div class="w-[100vw] h-[100vh]">
  <Navbar isLoggedIn={false} />
  <LoginForm />
</div>
