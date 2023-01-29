<script lang="ts">
  export let isLoggedIn:boolean;
  export let userName:string;
  export let role:number;
</script>

<nav class="flex items-center px-5 sticky top-0 backdrop-blur-sm bg-white/30 dark:text-white py-1 border-b">
<div class="font-semibold rounded-md grow select-none">
  <a class="text-xl" href="/">Faouzi Bouchkhachekh</a>
</div>

<div class="gap-5 text-lg hidden lg:flex md:flex items-center sticky top-0 ">
    <a class="select-none hover:text-gray-600" href="/projects">Projects</a> 
    <a class="select-none hover:text-gray-600" href="/contact">Contact</a> 
    <div class=" flex items-center gap-2 btn btn-outline dark:text-white">
      <p>Search</p>
      <kbd class="kbd text-black dark:text-white">start | ⌥</kbd>
      +
      <kbd class="kbd text-black dark:text-white">f</kbd>
    </div>
    {#if !isLoggedIn }
      <a href="/auth/login" class="flex items-center gap-x-2 font-medium text-gray-500  sm:border-l sm:border-gray-300  sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hover:text-blue-600">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
            </svg>Admin Log In</a>
      {:else}
      <a href="/auth/logout" data-sveltekit-preload-data="tap" data-sveltekit-reload>Logout</a>
      <p>({ userName })</p>
    {/if}
    
    {#if role == 1}
      <a href="/adminpage">
      <img src="/adminIcons.png" alt="admin" class="w-10 aspect-square rounded-full shadow-md border bg-white"/>
      </a>
    {/if}
</div>
<div class="flex md:hidden lg:hidden z-50">
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-outline kbd bg-gray-400 text-white border border-gray-500 shadow-md w-10 h-10">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-1 w-52 bg-white z-50">
    <li><a class="select-none" href="/projects">Projects</a> </li>
    <li><a class="select-none" href="/contact">Contact</a> </li>
    {#if !isLoggedIn }
      <li><a href="/auth/login">Admin Login</a></li>
      {:else}
      <li><a href="/auth/logout" data-sveltekit-reload >Logout</a></li>
      <li><p>({ userName })</p></li>
    {/if}
  </ul>
</div>
</div>
</nav>
