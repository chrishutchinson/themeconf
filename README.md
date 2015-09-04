# Theming with the WordPress API in the newsroom
## Using AngularJS and more

### Talk by Chris Hutchinson at [ThemeConf 2015](http://themeconf.com/)

The familiarity of WordPress makes it a powerful ally in the newsroom, particularly when quickly innovating new ideas and projects, but the theme API can often make it difficult or clunky to work with at speed.

Combining the flexibility of Advanced Custom Fields with the WordPress REST API, I'll show how this new way of using WordPress is not only incredibly flexible, but also a delight to use with frontend frameworks such as AngularJS.

I'll show a few examples of how we are using it to create new projects at _The Times and Sunday Times_, and what it means for designers and developers in the next 12 months.

## Slides

See `slides.pdf` for the presentation slides.

## WordPress setup

You'll need to install the following plugins:

- [WordPress API](http://wp-api.org) (I recommend v1.x until v2.0 is out of beta)
- [Advanced Custom Fields](http://www.advancedcustomfields.com) (Either v4.x or v5.x will work - ACF Pro gives additional functionality)
- [ACF to WP-API](https://wordpress.org/plugins/acf-to-wp-api/)

For a local install of WordPress, try [WP-Chassis](http://docs.chassis.io/en/latest/), a simple to use Vagrant-based setup.

## JavaScript resources

### AngularJS

There are AngularJS demos for both ES5 and ES6 in the `/angular` directory of this repo.

I would recommend using [`generator-angular`](https://github.com/yeoman/generator-angular) as a scaffold for your first AngularJS project, using [`ui-router`](https://github.com/angular-ui/ui-router) for easy, simple routing. If you want to write in ES2015 and compile down to ES5, try [`generator-gulp-angular`](https://github.com/Swiip/generator-gulp-angular).

### ReactJS

See [chrishutchinson/reactpress](http://github.com/chrishutchinson/reactpress) for an example of a React App integrating with the WordPress API

## Example apps

### [The Journalist Toolbox](http://toolbox.timesdev.tools/#/)

Initially a project built in 24 hours at [BBC #newsHACK](http://newshack.co.uk/), improving access to tools built for journalists. Uses the WordPress API and AngularJS (ES2015).

### [Placard](http://placard.timesdev.tools/#/campaign/19)

A two day prototype, creating a platform to help journalists run campaigns. Uses the WordPress API and AngularJS (ES5).