import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import { N as NavMenu } from "../../../../chunks/NavMenu.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  return `<div class="${"flex justify-center mt-20"}"><form method="${"post"}" action="${"/auth/api"}">${`<span class="${"text-red-500"}">All fields must be 6 characters or longer
      </span>`}
      <div class="${"flex flex-col gap-2"}"><input type="${"text"}" placeholder="${"Login"}" class="${[
    "input input-bordered rounded-sm max-w-xs w-96",
    username.length < 6 ? "input-error" : ""
  ].join(" ").trim()}" name="${"username"}"${add_attribute("value", username, 0)}>
       <input type="${"password"}" placeholder="${"Password"}" name="${"password"}" class="${[
    "input input-bordered max-w-xs w-96 rounded-sm",
    password.length < 6 ? "input-error" : ""
  ].join(" ").trim()}"${add_attribute("value", password, 0)}></div>
     <button class="${"border bg-black p-2 text-white w-full mt-2 rounded-md shadow-md"}" ${"disabled"}>Login</button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})}

<div class="${"w-[100vw] h-[100vh]"}">${validate_component(Navbar, "Navbar").$$render($$result, { isLoggedIn: false }, {}, {})}
  ${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
