<script>
  let pages = [
   "Projects",
   "Login",
   "Blog"
  ];

  let searchedPages = [
   "Projects",
   "Login",
   "Blog"
  ];

  let searchQuery = '';

  const search = () => {
    
  }
  
</script>

<div class="dark:border-white py-1 w-[600px] rounded px-2 shadow-2xl border ml-2">
<div class="flex items-center">
<input  
  placeholder="Search..."
  class="border-b-2 w-full p-2 text-xl focus:outline-none font-sans  font-semibold placeholder:font-light"
  />
</div>

{#each searchedPages as page }
  <div>
    <a href={`/${page}`}>{ page }</a>
  </div>
{/each}
</div>
