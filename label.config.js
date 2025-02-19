module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            }
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        ['module-resolver', {
            root: ['./src'],
            alias: {
                '@': './src'
            }
        }]
    ]
}