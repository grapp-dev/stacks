module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [require.resolve('../plugin')],
  };
};
