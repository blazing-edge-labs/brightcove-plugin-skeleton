# Brightcove plugin skeleton

Minimal nodejs skeleton for Brightcove player plugins. The `plugin.js` and `style.css` files are the entrypoints to the final plugin code. All the scripts target these two files and create bundles in the `dist` folder.

## Development
The development environment starts an express server. It also starts [browserify](https://github.com/browserify/browserify-handbook) and [postcss](https://github.com/postcss/postcss) to compile the javascript and css files. The dist folder will be created if one does not exist. Start the server and build scripts:
```bash
npm run dev
```

The `plugin.js` file in development uses the `devPlayerOptions` object options to the plugin. In production the options are sent from brightcove, that is why the development build only needs to register the plugin.

## Production
Building the application for production:
```bash
NODE_ENV=production npm run build
```
This command will build both the `CSS`, `JS` files and minify them. The `NODE_ENV` is set outside the scripts so we can build for any environment we want. If building for `development` with this command then update the condition in the `plugin.js` file so it does not include the plugin call.

If you have published the production scripts and still want to test the player locally, just run the express server.
```bash
npm start
```

## Linting code
Eslint is used for code linting. You can update the `.eslintrc` file to add/remove rules you would like. Running a lint check:
```bash
npm run lint:check
```
Running a lint check and attempting to fix errors:
```bash
npm run lint:fix
```

### Updating the plugin on brightcove
After the plugin has been tested out locally you need to build the production scripts and store them on a server. Copy their urls and set them in the plugin section of the brightcove player, which uses the plugin.

#### Updating the options
1. Open the player settings
2. Locate the plugins section and press the “Edit” button
3. Click on the “Name, Options(JSON)” tab to open the options
5. Update with a new JSON object

This process takes around 2 minutes to propagate. You cannot view the functionality on the plugin so you will need to open a video using the plugin to test it.

### Testing out the player
These are the steps to test out your plugin. *Remember that any changes made to the player options will probably take a minute or two to propagate.*
1. Open a video
2. Click on Publish and Embed (*it’s in the top right corner*). This will open a dropdown to select the type of player you want to view the video in
3. Select on the web player
3. Select the player you would like to view the video in
4. Click play and marvel at your work
