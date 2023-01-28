import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "./index2.js";
const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchedPages = [
    {
      page: "Home",
      icon: "/homeIcon.png",
      shortCut: "",
      link: "/"
    },
    {
      page: "projects",
      icon: "/projectsIcon.png",
      shortCut: "",
      link: "/projects"
    },
    {
      page: "contact",
      icon: "/contactIcon.png",
      shortCut: "",
      link: "/contact"
    }
  ];
  let searchQuery = "";
  return `<div class="${[
    "py-1 w-[600px] rounded px-2 shadow-2xl border ml-2 searchCenter bg-white dark:bg-white z-10",
    "hidden"
  ].join(" ").trim()}"><div class="${"flex items-center mb-5"}"><input placeholder="${"Search..."}" id="${"searchNav"}" class="${"border-b-2 w-full p-2 text-xl focus:outline-none font-sans font-semibold placeholder:font-light dark:bg-transparent "}"${add_attribute("value", searchQuery, 0)}></div>

  ${each(searchedPages, (page) => {
    return `<a${add_attribute("href", page.link, 0)} class="${"capitalize font-semibold text-gray-700 text-lg "}"><div class="${"flex items-center gap-2 hover:bg-gray-200 p-1 rounded focus-visible::outline-none"}"><img${add_attribute("src", page.icon, 0)}${add_attribute("alt", page.page, 0)} class="${"w-8 rounded-md focus:outline-none focus:bg-gray-200 object-cover "}">
        <p class="${"font-light"}">${escape(page.page)}</p></div>
    </a>`;
  })}
  <kbd class="${"kbd mt-5 cursor-pointer dark:bg-gray-400 dark:text-white"}">ESC</kbd></div>

`;
});
export {
  NavMenu as N
};
