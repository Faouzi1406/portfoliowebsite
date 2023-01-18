<script lang="ts">
  export let isLoggedIn:boolean;
  export let userName:string;
</script>

<nav class="py-4 flex items-center px-5">
<div class="font-semibold rounded-md grow select-none">
  <a class="text-xl" href="/">Faouzi Bouchkhachekh</a>
</div>
<div class="gap-5 text-lg hidden lg:flex md:flex items-center">
    <a class="select-none ">Blog</a> 
    <a class="select-none">Projects</a> 
    {#if !isLoggedIn }
      <a href="/auth/login">Login</a>
      {:else}
      <a href="/auth/logout">Logout</a>
      <p>({ userName })</p>
    {/if}
    <a href="https://github.com/Faouzi1406"><img src="/githubIcon.svg" alt="github icon" class="w-10 border p-1 rounded-full bg-white"/></a>
</div>
<div class="flex md:hidden lg:hidden">
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-1 w-52">
    <li><a class="select-none hover:cursor-pointer">Blog</a></li>
    <li><a class="select-none">Projects</a> </li>
    {#if !isLoggedIn }
      <li><a href="/auth/login">Login</a></li>
      {:else}
      <li><a href="/auth/logout">Logout</a></li>
      <li><p>({ userName })</p></li>
    {/if}
  </ul>
</div>
</div>
</nav>
