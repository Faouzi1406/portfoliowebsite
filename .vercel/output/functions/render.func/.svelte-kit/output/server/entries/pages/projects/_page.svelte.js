import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each } from "../../../chunks/index2.js";
import { P as Projects } from "../../../chunks/Projects.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import { N as NavMenu } from "../../../chunks/NavMenu.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  data.projects;
  let searchProjects = data.projects;
  let searchQuery = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-1en3a0b_START -->${$$result.title = `<title>Projects</title>`, ""}<!-- HEAD_svelte-1en3a0b_END -->`, ""}

<div class="${"h-screen"}">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      isLoggedIn: user.isValidated,
      userName: user.userName || "",
      role: user.role || 0
    },
    {},
    {}
  )}

<div class="${"flex justify-center pr-5 mb-5 mt-5 ml-5"}"><input placeholder="${"Search..."}" class="${"font-sans text-lg focus:outline-none border rounded-md w-[500px] font-bold p-3 dark:bg-transparent dark:text-white"}"${add_attribute("value", searchQuery, 0)}></div>

<div class="${"flex flex-wrap px-2 gap-3 items-center justify-center"}">${each(searchProjects, (project) => {
    return `${validate_component(Projects, "Projects").$$render($$result, { projects: project }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
