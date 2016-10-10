/* jshint node: true */
'use strict';
const path = require('path');
const chalk = require('chalk');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ui-navigation',
   description: 'An Ember-flavoured Bootstrap 4.x eco-system',

  included(app, parentAddon) {
    const target = (parentAddon || app);
    this._super.included(target);

    if (app.registry.availablePlugins['ember-cli-sass']) {
      const sassOptions = app.options.sassOptions || { includePaths: []};
      sassOptions.includePaths.push(path.join(__dirname, 'ui-navigation', 'bootstrap-source'));
    } else {
      this.ui.writeLine(chalk.bold('ui-navigation: ') +
        ' did not detect ' +
        chalk.bold.green('ember-cli-sass') +
        ' so using static CSS configuration.');
      target.import('vendor/ui-navigation/ui-navigation.css');
    }
  },

   treeForStyles: function(tree) {
    const existingStyle = this._super.treeForStyles.apply(this, arguments);
    const trees = [];
    if(tree) {
      trees.push(tree);
    }
    const bootstrapPath = path.join('node_modules', 'bootstrap/scss');
    const bootstrap = new Funnel(bootstrapPath, {
      srcDir: '/',
      destDir: '/bootstrap-source'
    });
    // trees.push(log(bootstrap, { output: 'tree' } ));
    trees.push(bootstrap);
    if (existingStyle) {
      trees.push(existingStyle);
    }

    return mergeTrees(trees);
  },

  isDevelopingAddon: function () {
    return false;
  }
};
