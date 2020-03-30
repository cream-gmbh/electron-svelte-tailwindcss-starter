/**
 * originally copied from https://tailwindcss.com/docs/controlling-file-size/
 * modified by Vatroslav Vrbanic https://cream.gmbh: Be able to purge CSS in development mode (optionally) in order to check bundle.css size
 */

const purgeProductionOnly = true;
let doPurge = false;

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


        /* If we don't purge, we just get gigantic bundle.css, svelte css still not included inside bundle.css */
        ...doPurge
            ? [purgecss]
            : []
    ]
};