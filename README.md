# ARE YOU ALWAYS MAD AT WEB ECOSYSTEM?

Sorry. The web ecosystem is wild.

Here is a boilerplate that does as little as possible. You get  webpack for bundling and dev server. Also Babel and corejs to enable ES6 syntax. Grape!

A quick tour:

### webpack.config.js

Webpack configuration for combining and compiling all of your code and assets into a static bundle. It's a nightmare land.

Webpack plugins enable wild things like `import`ing CSS or JSON so that webpack will inject it into the DOM for you, using an HTML template for your `index.html` and like annoyingly more.

Also, webpack provides a dev server which compiles your bundle and updates it each time you make a code change.

- [webpack](https://webpack.js.org/guides/getting-started/)
- [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)

### babel.config.json

New JavaScript language features keep coming out but browsers cant keep up with em. Babel tries its best to transpile "new" JavaScript to older JavaScript which works in more browsers and environments. `babel.config.json` configures babel. It's another nightmare place, don't go there.

### src/index.ejs

Webpack dynamically generates assets and junk, so your base `index.html` is no longer like "HEY GUYS JUST LOAD MY JAVASCRIPTS FROM INTERNET!". Anyway, just let webpack generate `index.html` for you. HtmlWebpackPlugin do that, and it uses `src/index.ejs` as the template.

### src/index.js

This is the main entrypoint to your app. Like, go nuts.

## Development

This was developed on nodejs 10x, but 12x is probably fine too.

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

And point your web browser at http://localhost:8080.

## Notes

- [babel + webpack](https://babeljs.io/setup#installation)
- [corejs + regenerator runtime + babel](https://github.com/zloirock/core-js#babel) to polyfill es6
- [HTML Webpack Plugin](https://webpack.js.org/plugins/html-webpack-plugin/) to put webpack bundle into an html file
