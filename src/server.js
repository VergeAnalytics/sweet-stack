import { serve } from 'std/http/server.ts';
import { graphql } from './api.js';

/**
 * @param {Request} reg
 * @returns {Response}
 */
serve((req) => {
	const routes = {
		'/': serveStatic('./app/public/index.html', 'text/html'),
		'/favicon.png': serveStatic('./app/public/favicon.png', 'image/png'),
		'/build/bundle.css': serveStatic('./app/public/build/bundle.css', 'text/css'),
		'/build/bundle.js': serveStatic('./app/public/build/bundle.js', 'text/javascript'),
		'/graphql': graphql
	};

	const { pathname } = new URL(req.url);

	console.log(`${req.method} ${pathname}`);

	return routes[pathname] ? routes[pathname](req) : routes['/'](req);
});


/**
 * 
 * @param {string} file 
 * @param {string} type 
 * @returns {Response}
 */
function serveStatic(file, type) {
	return async () => {
		new Response(await Deno.readTextFile(file), {
			headers: { 'content-type': type }
		});
	};
}
