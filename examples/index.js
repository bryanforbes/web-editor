require.config({
    paths: {
        'vs': '../node_modules/monaco-editor/min/vs',
        '@dojo': '../node_modules/@dojo'
    },
    packages: [
        { name: 'src', location: '..' }
    ]
});
require(['./editor'], function () { });
//# sourceMappingURL=index.js.map