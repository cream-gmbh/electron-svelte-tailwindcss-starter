/**
 * originally copied from https://tailwindcss.com/docs/controlling-file-size/
 * modified by Vatroslav Vrbanic https://cream.gmbh
 * WHY?: Being able to check bundled (& purged) CSS size in dev-mode if needed. Normally in dev-mode you would like to have all (not purged) TailwindCSS classes available in order to tweak something.
 */

/*
If purgeProductionOnly is set to "true", in dev-mode "tw-and-custom.css" / "svelte-components.css" will be large, as unused styles will not be purged, means all TailwindCSS base styles will be included.
If purgeProductionOnly is set to "false", in dev-mode "tw-and-custom.css" / "svelte-components.css" will be small, as all unused styles (except of those between "purgecss start ignore" and "purgecss end ignore", see main.css) will be purged.
*/
const purgeProductionOnly = true; // change this to false / true, default: true

let doPurge;
purgeProductionOnly ? doPurge = !process.env.ROLLUP_WATCH : doPurge = true;

// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html',
        './src/**/*.svelte'
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});


module.exports = {
    plugins: [
        require("postcss-import")(),
        require('tailwindcss'),
        require('autoprefixer'),

        ...doPurge
            ? [purgecss]
            : []
    ]
};