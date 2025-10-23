module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            'assets': './src/assets',
            'commomstyles': './src/commomstyles',
            'components': './src/components', 
            'constants': './src/constants',
            'fakedatas': './src/fakedatas',
            'utils' : './src/utils',
            'hooks': './src/hooks',
          }
        }
      ],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ]
  };
};
