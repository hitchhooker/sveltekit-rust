import { sveltekit } from '@sveltejs/kit/vite';
import rust from '@wasm-tool/rollup-plugin-rust';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
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
