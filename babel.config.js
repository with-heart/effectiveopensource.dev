module.exports = (api) => {
  const isTest = api.env('test')

  if (isTest)
    return {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
      ],
    }

  return {
    babelrcRoots: ['.', 'site'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
        },
      ],
    ],
  }
}
