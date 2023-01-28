export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Cool project.jpg","Dit is een project!.jpg","Dit is een projectwwwww.jpg","Dit is een testje.jpg","Mij.webp","Project testing name.jpg","Some project name.jpg","Some project.jpg","Testing this wwoowow.jpg","Testing.jpg","Wowwie.jpg","adminIcon.png","adminIcons.png","blogIcon.png","compass.png","contactIcon.png","cooleafbeeldingyooo.jpg","coolprojectje.jpg","csLang.svg","dit  is een project.jpg","email.png","favicon.png","githubIcon.svg","homeIcon.png","jsIcon.svg","jsLogo.png","linkedIn.png","nextjslogo.svg","projectsIcon.png","protruding-squares.svg","react.png","react.svg","rocketRust.jpeg","rustLogo.png","selectImage.png","svelteLogo.png","svelteLogo.svg","tauriLogo.svg","tcp-router.jpg","teeeeeeeee.jpg","teeeeeeeeetee.jpg","teeeeeeeeeteeeeeeeee.jpg","tesint this stufff.jpg","testing wowowowwowo.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-eb75a2f0.js","imports":["_app/immutable/start-eb75a2f0.js","_app/immutable/chunks/index-e7c877ee.js","_app/immutable/chunks/singletons-424a0fcd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/adminpage",
				pattern: /^\/adminpage\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/adminpage/createRepo",
				pattern: /^\/adminpage\/createRepo\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/adminpage/gitApi",
				pattern: /^\/adminpage\/gitApi\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/adminpage/gitApi/_server.ts.js')
			},
			{
				id: "/auth/api",
				pattern: /^\/auth\/api\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/auth/api/_server.ts.js')
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/contact/server",
				pattern: /^\/contact\/server\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/contact/server/_server.js')
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/projects/edit/[projectId]",
				pattern: /^\/projects\/edit\/([^/]+?)\/?$/,
				params: [{"name":"projectId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,8], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/projects/[projectId]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"projectId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,7], errors: [1,,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
