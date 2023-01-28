import { c as create_ssr_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>Loging out... If you aren&#39;t being redirected click <a href="${"/"}" class="${"text-blue-400"}">here</a></div>`;
});
export {
  Page as default
};
