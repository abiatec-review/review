module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@assets": "./assets",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@redux": "./src/redux",
          "@screens": "./src/screens",
          "@utils": "./src/utils"
        }
      }
    ]
  ]
};
