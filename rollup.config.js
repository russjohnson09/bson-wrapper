import builtins from 'rollup-plugin-node-builtins';


import resolve from 'rollup-plugin-node-resolve';

import commonjs from 'rollup-plugin-commonjs';

import babel from 'rollup-plugin-babel';


//https://github.com/rollup/rollup-plugin-node-resolve/issues/222

//Use output.globals to specify browser global variable names corresponding to external modules

//Uncaught ReferenceError: BSON is not defined

//using globals
//https://github.com/rollup/rollup/issues/1437

//https://www.npmjs.com/package/rollup-plugin-external-globals

//Creating a browser bundle that depends on 'buffer'. You might need to include https://www.npmjs.com/package/rollup-plugin-node-builtins

////https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency

export default {
  input: 'index.js',
  output: [
    {
      // external: ['react', 'react-dom'],
      // globals: {
      //   'react': 'React',
      //   'react-dom': 'ReactDOM'
      // },
      // external: ['buffer'],
      // external: ['react'],

      // globals: {
      //   'bson': 'bson',
      // },
      // external: ['bson'],
      file: 'pure-bundle.js',
      format: 'iife',
      // format: 'umd',
      sourcemap: 'inline',
      name: 'bson_rollup',
      // globals: {
      //   'bson': 'bson'
      // }
    },
  ],
  plugins: [
    resolve({
      // mainFields: ["browser", "module", "main"],

      preferBuiltins: true
    }),

    commonjs({
      include: 'node_modules/**'
    }),
    builtins(),

    // babel({
    //   //@babel/react
    //   presets: ['@babel/react']
    // })
    // resolve(),

    // builtins(),

  ]
};