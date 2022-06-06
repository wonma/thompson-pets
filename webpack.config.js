var path = require('path');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename:'bundled.js',
        path: path.resolve( __dirname, 'app')
    },
    mode: "development",
    watch: true, 
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}