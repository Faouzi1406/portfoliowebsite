import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../../chunks/index2.js";
import { N as Navbar } from "../../../../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  let currentProject = data.currentProject;
  let cur_project = "/" + currentProject.projectThumb.split("/")[2];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      isLoggedIn: user.isValidated,
      userName: user.userName || "",
      role: user.role || 0
    },
    {},
    {}
  )}
<div class="${"px-3 "}"><div class="${"w-full flex items-center relative flex-col "}"><input type="${"file"}" accept="${"image/png, image/jpg"}" class="${"hidden"}" id="${"openFile"}">
    <img${add_attribute("src", `${cur_project}`, 0)} class="${"w-full aspect-square h-52 object-cover"}">
    <div class="${"absolute bottom-0 backdrop-blur-0 bg-white/30 w-full p-2"}"><input class="${"p-1 input border"}"${add_attribute("value", currentProject.projectName, 0)}></div></div>
  <div class="${"mt-5"}"><p>Omschrijfing</p>
    <textarea class="${"w-full border p-2 rounded-md"}">${currentProject.projectDesc || ""}</textarea></div>
  <div><p>Readme</p>
    <textarea class="${"w-full border p-2 rounded-md"}">${currentProject.projectReadme || ""}</textarea></div>
  <button class="${"btn w-full btn-success text-white"}">Save</button></div>`;
});
export {
  Page as default
};
