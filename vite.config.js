import { sveltekit } from '@sveltejs/kit/vite';
import rust from '@wasm-tool/rollup-plugin-rust';
import Inspect from 'vite-plugin-inspect'


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
	    Inspect(),
		sveltekit(),
		{ // https://vitejs.dev/guide/api-plugin.html#rollup-plugin-compatibility adviced here
			...rust({
				verbose: true,
				serverPath: "",
				inlineWasm: true,
			}),
			enforce: 'post',
			apply: 'build'
		}
	]
};

export default config;
