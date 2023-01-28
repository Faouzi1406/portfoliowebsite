import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { N as Navbar } from "../../chunks/Navbar.js";
import { N as NavMenu } from "../../chunks/NavMenu.js";
const ErvaringenAccordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accordionProps } = $$props;
  if ($$props.accordionProps === void 0 && $$bindings.accordionProps && accordionProps !== void 0)
    $$bindings.accordionProps(accordionProps);
  return `<div class="${"collapse collapse-plus shadow rounded-md border w-96"}"><input type="${"checkbox"}"> 
  <div class="${"collapse-title text-xl font-medium"}"><div class="${"grow flex items-center gap-2"}"><img${add_attribute("src", accordionProps.icon, 0)}${add_attribute("alt", accordionProps.title, 0)} class="${"w-10 rounded-full border bg-white p-1 object-cover aspect-square"}">
  <p>${escape(accordionProps.title)}</p></div></div>
  <div class="${"collapse-content"}"><p>${escape(accordionProps.desc)}</p></div></div>`;
});
const Ervaringen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-[100vw] flex items-center justify-center mt-10 flex-col"}"><h2 class="${"bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold text-2xl"}">Mijn ervaring</h2>
  <div class="${""}">
    <div class="${"w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"}"><div class="${"flex flex-col gap-2"}"><p class="${"font-black text-[18px] text-center"}">Language&#39;s</p>
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/jsLogo.png",
        desc: "Met Javscript heb ik nogal wat applicatie's gemaakt zowel op school voor opdrachten als na school om bijvoorbeeld web-applicaties te maken.",
        title: "JavaScript"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/rustLogo.png",
        desc: "Rust is mijn favoriete taal omdat ik het nogal leuk vind om hierin applicatie's te maken en system programming te doen zoals tools om web requests te maken vanuit de terminal en tcp servers te schrijven.",
        title: "Rust"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/csLang.svg",
        desc: "Met C# heb ik nogal veel applicatie's gemaakt voor school waardoor ik hiermee veel ervaring heb gebouwt en meerdere crud applicatie's heb gemaakt.",
        title: "C#"
      }
    },
    {},
    {}
  )}</div>
      <div class="${"flex flex-col gap-2"}"><p class="${"font-black text-[18px] text-center"}">Frameworks &amp; Library&#39;s</p>
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/svelteLogo.svg",
        desc: "Svelte is een JS framework waarme je nogal snelle goede applicaties kan maken, met svelte heb ik onder andere deze portfollio gemaakt",
        title: "Svelte & Svelte kit"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/nextjslogo.svg",
        desc: "Next.js is een JavaScript-framework voor het bouwen van server-gerenderende React-applicaties met SSR, SSG, code splitting en meer. Hier heb ik ook meerdere applicatie mee gemaakt zoals een social media applicatie.",
        title: "Next.js"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/react.svg",
        desc: "React maakt het makkelijk om met components een goede samenhangende user interface te maken en maakt het ook makkelijk om met states reactivity toe te passen.",
        title: "React"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/tauriLogo.svg",
        desc: "Tauri maakt het makkelijk om met Rust en een frontend framework zoals Next.js of Svelte een desktop applicatie te maken die stabiel is. Met tauri heb ik wat applicatie's gemaakt maar het meeste plezier gehad met het maken een Pokedex.",
        title: "Tauri"
      }
    },
    {},
    {}
  )}
        ${validate_component(ErvaringenAccordion, "ErvaringenAccordion").$$render(
    $$result,
    {
      accordionProps: {
        icon: "/rocketRust.jpeg",
        desc: "Met rocket kan je in Rust snele Api's schrijven.",
        title: "Rocket"
      }
    },
    {},
    {}
  )}</div></div></div></div>`;
});
const IndexBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"py-2"}"><div class="${"h-52 py-6 flex items-center flex-col gap-5 justify-center"}"><div><p class="${"bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold "}">Software developer</p>
      <h1 class="${"text-3xl font-extrabold text-center dark:text-white"}">Faouzi Bouchkhachekh</h1></div>
    <div class="${"flex items-center gap-3"}"><a class="${"btn btn-info text-white"}" href="${"/contact"}">Contact  mij</a>
      <a class="${"btn btn-outline dark:text-white"}" href="${"/projects"}">Projecten</a></div></div>
<div class="${"flex flex-col items-center justify-center"}"><div class="${"w-96 pt-10"}"><h1 class="${"font-semibold text-center pb-5 text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 dark:from-white dark:to-white text-transparent font-bold"}">Over mij</h1>
     <p>Mijn naam is Faouzi Bouchkhachekh. Ik ben een software developer die momenteel de opleiding software development volgt aan Grafisch Lyceum Rotterdam (Jaar 2). Mijn hoofdtalen is Rust, C# en JS. Ik heb ook ervaring met React, Svelte en Next.js. Mijn voorkeurseditor is Vim. Mijn primaire besturingssysteem is Linux, waar ik ook verstand van heb. Mijn interesse ligt vooral bij systeemprogrammering &amp; web-development.
     </p></div>
  <div class="${"grid grid-cols-2 mt-4 gap-10"}"><a href="${"https://github.com/Faouzi1406"}"><img src="${"/githubIcon.svg"}" alt="${"github icon"}" class="${"w-12 rounded-full bg-white border border-white"}"></a>

    <a href="${"https://www.linkedin.com/in/faouzi-bouchkhachekh-496624254/"}"><img src="${"/linkedIn.png"}" alt="${"github icon"}" class="${"w-12 rounded-full bg-white border"}"></a></div></div>
${validate_component(Ervaringen, "Ervaringen").$$render($$result, {}, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-n3ior8_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-n3ior8_END -->`, ""}

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
  ${validate_component(IndexBody, "IndexBody").$$render($$result, { data }, {}, {})}
  ${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
