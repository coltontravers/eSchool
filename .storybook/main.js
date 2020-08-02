module.exports = {
    stories: ["../src/**/*.stories.(js|mdx)"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-knobs"
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("babel-loader")
                },
                require.resolve("react-docgen-typescript-loader")
            ]
        });
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    }
};
