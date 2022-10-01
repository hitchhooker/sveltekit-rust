import { sveltekit } from '@sveltejs/kit/vite';
import rust from '@wasm-tool/rollup-plugin-rust';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		rust({
			verbose: true,
			serverPath: "",
			inlineWasm: true,
			
		})
	]
};

export default config;
