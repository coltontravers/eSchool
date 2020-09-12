const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(.js|ts|tsx)$/,
                include: path.resolve(__dirname, "src"),
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "public"),
        hot: true,
        stats: "minimal",
        overlay: true
    }
};
