module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@utils': './src/utils',
                    '@features': './src/features',
                },
            },
        ],
    ],
};
