import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index2.js";
import { N as NavMenu } from "../../../chunks/NavMenu.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  let naam = "";
  let email = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})}

${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      isLoggedIn: user.isValidated,
      userName: user.userName || "",
      role: user.role || 0
    },
    {},
    {}
  )}


<div class="${"flex items-center flex-col justify-center mt-20"}"><h1 class="${"font-bold text-xl"}">Contact mij</h1>
  <div class="${"w-full px-1 flex flex-col gap-4"}"><div class="${"flex flex-col gap-1"}"><label for="${"naam"}">Naam</label>
      <input class="${"border rounded-md w-full h-10 p-2"}" placeholder="${"Naam"}" id="${"naam"}"${add_attribute("value", naam, 0)}></div>

    <div class="${"flex flex-col gap-1"}"><label for="${"email"}">E-mail</label>
      <input class="${"border rounded-md w-full h-10 p-2"}" placeholder="${"E-mail"}" id="${"email"}"${add_attribute("value", email, 0)}></div>

    <div class="${"flex flex-col gap-1"}"><label for="${"bericht"}">Bericht</label>
      <textarea class="${"border rounded-md w-full p-2"}" placeholder="${"E-mail"}" id="${"bericht"}">${""}</textarea></div>

    <div class="${"flex flex-col"}"><button class="${"font-bold bg-black w-full text-white p-2 rounded shadow-md"}">Verzend</button></div></div></div>
<a href="${"mailto: faouzib1@outlook.com"}" class="${"flex items-center mt-3 ml-1 text-blue-600"}">E-Mail</a>

${``}

${``}`;
});
export {
  Page as default
};
