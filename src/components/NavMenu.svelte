<script>
  let searchShow = false;

  let pages= [{
   page:"Home",
   icon:"/homeIcon.png",
   shortCut:"",
   link:"/"
  },
  {
   page:"projects",
   icon:"/projectsIcon.png",
   shortCut:"",
   link:"/projects"
  }, 
  {
   page:"blog",
   icon:"/blogIcon.png",
   shortCut:"",
   link:"/blog"
  },]; 

  let searchedPages = [{
   page:"Home",
   icon:"/homeIcon.png",
   shortCut:"",
   link:"/"
  },
  {
   page:"projects",
   icon:"/projectsIcon.png",
   shortCut:"",
   link:"/projects"
  }, 
  {
   page:"blog",
   icon:"/blogIcon.png",
   shortCut:"",
   link:"/blog"
  },];

  let searchQuery = '';

  const search = () => {
    searchedPages =  pages.filter(x => x.page.toLowerCase().match(searchQuery.toLowerCase()))
  }


  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ƒ':
       searchShow = true;
       break;
      case 'Escape': 
       searchShow = false;
       break;
    }
  }
</script>

<div 
class="py-1 w-[600px] rounded px-2 shadow-2xl border ml-2 searchCenter bg-white"  
class:hidden={ !searchShow }
>
<div class="flex items-center mb-5">
<input  
  placeholder="Search..."
  id="searchNav"
  class="
  border-b-2 w-full 
  p-2 text-xl focus:outline-none font-sans  font-semibold placeholder:font-light  
  "
  bind:value={ searchQuery }
  on:input={ search }
  />
</div>

{#each searchedPages as page }
 <a href={page.link} class="capitalize font-semibold text-gray-700 text-lg ">
 <div class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded focus-visible::outline-none">
    <img 
    src={ page.icon } alt={ page.page } 
    class="
    w-8  rounded-md focus:outline-none focus:bg-gray-200 object-cover
    "
    />
    <p class="font-light">{ page.page }</p>
  </div>
  </a>
{/each}
</div>

<svelte:window on:keydown={onKeyDown}/>
