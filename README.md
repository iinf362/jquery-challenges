jquery-challenges
=================

1. **Fork** this repo.
2. **Clone** your fork'd version.
3. Add [jQuery](http://jquery.com/) to the page (you may use a CDN or a local version).
4. Starting with the existing code, build the following example using jQuery. You may write additional CSS and HTML.
5. For help, use the [jQuery API Documentation](http://api.jquery.com/).
5. Commit all your changes.
6. Complete the challenges before next class (you may leave when you finish).

## 1. Create a mobile nav

1. When the browser is at max-width 480px, the `.nav-main` navigation disappears and a "menu" button appears.
2. When you click the "menu" button the navigation appears.
3. When you click the "menu" button again, the navigation disappears.

[Hint](http://api.jquery.com/category/effects/sliding/)

## 2. Create accordion panels

1. On browser load, the content for each `.panel` is hidden.
2. When you click a panel title, *that* content appears.
3. When you click another panel title, *that* content appears, but the content of any other opened panel disappears.
4. Bonus: when you click an already open panel's title, it closes.

## 3. Sticky plugin

1. Download [sticky.js](https://github.com/garand/sticky) to your js folder.
2. Add the plugin to the page.
3. Make `.nav-internal` sticky.
4. Hide `.nav-internal` when the browser max-width is 480px.
5. Change the `topSpacing` of the plugin to a number greater than 0.
6. Add a `className` for when the nav is stuck. Create a new CSS style for the class to change the look of the nav when it's stuck.
