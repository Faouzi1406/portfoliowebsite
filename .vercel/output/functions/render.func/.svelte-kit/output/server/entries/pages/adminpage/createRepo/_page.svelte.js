import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "../../../../chunks/index2.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import "marked";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  let projectName = ``;
  let image = "/selectImage.png";
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

<div class="${"px-5 w-screen"}"><div class="${"flex flex-col items-center"}"><div class="${"image w-2/3 h-full flex flex-col items-center"}"><div class="${"relative w-full"}"><img${add_attribute("src", image, 0)} class="${"w-full h-96 object-cover"}">

        <input type="${"file"}" class="${"hidden file-input file-input-bordered file-input-info w-full max-w-xs mt-5"}" accept="${"image/png, image/jpeg"}" id="${"imageSelect"}">
        <div class="${"absolute bottom-0 text-white w-full backdrop-blur-xl bg-black/30 p-2 flex"}"><input placeholder="${"Project name"}" class="${"font-semibold bg-transparent text-white rounded-md mt-2 focus:outline-none text-2xl placeholder:text-white "}"${add_attribute("value", projectName, 0)}>
          <div class="${"absolute right-0 flex items-center gap-2"}"><img${add_attribute("src", "/selectImage.png", 0)} class="${"w-10 rounded-full border aspect-square"}" alt="${"profiel foto"}">
            <p class="${"mr-5 first-letter:capitalize"}">${escape(user.userName)}</p></div></div></div>
      <textarea placeholder="${"Project desc"}" class="${"font-semibold px-2 border rounded-md py-2 mt-2 w-full focus:outline-none mb-2 dark:bg-gray-500 dark:text-white"}">${""}</textarea>
      <textarea placeholder="${"README.md"}" class="${"p-2 border rounded h-96 w-full dark:bg-gray-500 dark:text-white"}">${""}</textarea>
      <button class="${"btn mt-5 btn-success w-full"}">Save</button></div>
    
    
    </div></div>

${``}`;
});
export {
  Page as default
};
