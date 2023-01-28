<script>
  import { browser } from "$app/environment";

  let searchShow = false;

  let pages = [
    {
      page: "Home",
      icon: "/homeIcon.png",
      shortCut: "",
      link: "/",
    },
    {
      page: "projects",
      icon: "/projectsIcon.png",
      shortCut: "",
      link: "/projects",
    },
    {
      page: "contact",
      icon: "/contactIcon.png",
      shortCut: "",
      link: "/contact",
    },
  ];

  let searchedPages = [
    {
      page: "Home",
      icon: "/homeIcon.png",
      shortCut: "",
      link: "/",
    },
    {
      page: "projects",
      icon: "/projectsIcon.png",
      shortCut: "",
      link: "/projects",
    },
    {
      page: "contact",
      icon: "/contactIcon.png",
      shortCut: "",
      link: "/contact",
    },
  ];

  let searchQuery = "";

  const search = () => {
    searchedPages = pages.filter((x) =>
      x.page.toLowerCase().match(searchQuery.toLowerCase())
    );
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case "ƒ":
        if (window.screen.width >= 768) {
        console.log(window.screen.width)
          searchShow = true;
          break;
        }
      case "Escape":
        searchShow = false;
        break;
    }
  };
</script>

<div
  class="py-1 w-[600px] rounded px-2 shadow-2xl border ml-2 searchCenter bg-white dark:bg-white z-10"
  class:hidden={!searchShow}
>
  <div class="flex items-center mb-5">
    <input
      placeholder="Search..."
      id="searchNav"
      class="
  border-b-2 w-full 
  p-2 text-xl focus:outline-none font-sans  font-semibold placeholder:font-light   dark:bg-transparent
  "
      bind:value={searchQuery}
      on:input={search}
    />
  </div>

  {#each searchedPages as page}
    <a href={page.link} class="capitalize font-semibold text-gray-700 text-lg ">
      <div
        class="flex items-center gap-2 hover:bg-gray-200 p-1 rounded focus-visible::outline-none"
      >
        <img
          src={page.icon}
          alt={page.page}
          class="
    w-8  rounded-md focus:outline-none focus:bg-gray-200 object-cover
    "
        />
        <p class="font-light">{page.page}</p>
      </div>
    </a>
  {/each}
  <kbd
    class="kbd mt-5 cursor-pointer dark:bg-gray-400 dark:text-white"
    on:click={() => (searchShow = false)}>ESC</kbd
  >
</div>

<svelte:window on:keydown={onKeyDown} />
