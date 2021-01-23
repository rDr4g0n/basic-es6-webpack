# ARE YOU ALWAYS MAD AT WEB ECOSYSTEM?
Sorry.

## Development

Install deps:

    npm install

Then start dev server (with hot reload!):

    npm run start

And point your web browser at http://localhost:8080.

## Build

You can build a bundle optimized for production with:

    npm run build

The bundle will end up in the `dist` dir. You can make the code publicly available somewhere (Amazon S3, GCP Storage Bucket) oooorrr if you want to test the prod build locally, you can serve the build prod fils from a local http server.

    npm run serve:prod

## Notes

- [webpack](https://webpack.js.org/guides/getting-started/)
- [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
- [babel + webpack](https://babeljs.io/setup#installation)
- [corejs + regenerator runtime + babel](https://github.com/zloirock/core-js#babel) to polyfill es6
- [HTML Webpack Plugin](https://webpack.js.org/plugins/html-webpack-plugin/) to put webpack bundle into an html file
