import sveltePreprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify()
	},
	preprocess: sveltePreprocess()
};

export default config;
