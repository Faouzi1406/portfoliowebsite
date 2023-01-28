import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-c1d00226.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-c1d00226.js","_app/immutable/chunks/index-e7c877ee.js"];
export const stylesheets = ["_app/immutable/assets/_layout-4597eaed.css"];
export const fonts = [];
