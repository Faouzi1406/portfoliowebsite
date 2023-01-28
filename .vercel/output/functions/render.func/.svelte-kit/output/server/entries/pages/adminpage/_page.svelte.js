import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/index2.js";
import { P as Projects } from "../../../chunks/Projects.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projects = data.projects;
  const user = data.user;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"h-screen"}">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      isLoggedIn: user.isValidated,
      userName: user.userName || "",
      role: user.role || 0
    },
    {},
    {}
  )}
  <div class="${"flex p-2 items-center"}"><div class="${"auto-cols-max flex flex-wrap gap-5 justify-center"}"></div>
    <a class="${"btn"}" href="${"/adminpage/createRepo"}">Create repo +</a></div>

  <div class="${"flex justify-center"}"><div class="${"grid grid-cols-1 md:grid-cols-2 items-center gap-2 lg:grid-cols-3"}">${each(projects, (project) => {
    return `${validate_component(Projects, "Projects").$$render($$result, { projects: project }, {}, {})}`;
  })}</div></div></div>`;
});
export {
  Page as default
};
