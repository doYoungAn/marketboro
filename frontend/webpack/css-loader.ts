export default {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]',
            mode: (resolvePath: string) => {
                if (resolvePath.match(/node_modules/)) {
                    return 'global';
                }
                return 'local';
            }
        },
    }
}
