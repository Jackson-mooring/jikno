import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: `./src/app/tests/example-test.js`,
    output: {
        name: 'memorizeTextAppTests',
        format: `iife`,
        sourcemap: 'inline',
    },
    plugins: [
        commonjs(),
        resolve({
            browser: true,
        }),
    ],
    watch: {
        exclude: [`node_modules/**`],
        include: [`client/**`],
    },
}