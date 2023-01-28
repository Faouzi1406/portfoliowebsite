import { c as create_ssr_component, d as add_attribute, e as escape } from "./index2.js";
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  const project = (project2) => {
    let projectName = project2.split("/");
    return projectName;
  };
  console.log(projects);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `<div class="${"border rounded-md w-96 h-96 shadow grid dark:text-white"}"><div><img${add_attribute("src", projects.projectThumb.split("/")[2], 0)} class="${"h-60 w-full object-cover"}" alt="${"Thumbmail"}"></div>
  <div class="${"py-2 px-1 flex gap-2"}"><img${add_attribute("src", projects.projectAvatar, 0)} class="${"w-14 h-14 rounded-full object-cover aspect-square"}" alt="${"Profiel foto"}">
  <div><p class="${"font-bold text-2xl"}">${escape(project(projects.projectName)[1])}</p>
    <p class="${"text-gray-500"}">@${escape(project(projects.projectName)[0])}</p>

    <p class="${"text-gray-500 dark:text-white"}">${escape(projects.projectDesc)}</p></div></div>
  <a class="${"bg-black rounded-b text-white flex items-center p-2 justify-center font-semibold text-lg"}"${add_attribute("href", `/projects/${projects.id}`, 0)}>Bekijk project</a></div>`;
});
export {
  Projects as P
};
