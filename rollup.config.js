import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import htmlTemplate from 'rollup-plugin-generate-html-template';
//import replace from '@rollup/plugin-replace'; //not yet used, but most probably useful later in development process
//import copy from 'rollup-plugin-copy'; //not yet used, but most probably useful later in development process

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			dev: !production,
			css: function (css) {
				// creates `main.css` and `main.css.map` — pass `false`
				// as the second argument if you don't want the sourcemap
				css.write('public/svelte-components.css', false);
			},
		}),

		htmlTemplate({
				template: 'src/index.html',
				target: 'index.html',
				attrs: ['defer'],

				replaceVars: {
					//set lang attribute
					'__LANG__': "x-default",

					//splitting all css classes into different css files:

					//classes defined inside Svelte components' <style>-tag only, see svelte-plugin above
					'__STYLE_URL_1__': "./svelte-components.css",

					//used TailwindCSS utilities & classes defined inside main.css, see postcss-plugin below
					'__STYLE_URL_2__': "./tw-and-custom.css"
				}
			}
		),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: false,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),

		postcss({
			//used TailwindCSS utilities & classes defined inside main.css
			extract: 'public/tw-and-custom.css',
			map: false
		}),

		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],

	watch: {
		clearScreen: false
	}
};
