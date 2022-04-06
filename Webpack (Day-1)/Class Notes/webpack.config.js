
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(".", "build"), //Folder created with name "build"
        filename: "bundle.js"  //File will be cretaed with the name "bundle"
    },
    mode: "development", // There are two mode, 1st "development" 2nd "production"
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    },
};