import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import uglify from 'rollup-plugin-uglify'

export default {
	input: 'y10egg/js/main.js',
	output:{
		file:'y10egg/js/app.js',
		format: 'iife',
		// sourceMap: 'inline'
		sourceMap: false
	},
	plugins: [
		sass({
			processor: css => postcss([ autoprefixer ])
				.process(css)
				.then(result => result.css),
			output:'y10egg/css/app.css'
			// insert:true
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		uglify()
	]
};