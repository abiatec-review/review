module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@utils': './src/utils',
                    '@components': './src/components',
                    '@api': './src/api',
                },
            },
        ],
    ],
};
