# Refills

## Prepackaged patterns and components, built on top of Bourbon, Bitters and Neat

# Requirements
- [node](http://nodejs.org)
- [gulp.js](http://gulpjs.com) -or- [Grunt](http://gruntjs.com) -or- [node-sass](https://github.com/andrew/node-sass)

# Installation

To install as a development dependency, run:

```bash
npm install --save-dev node-refills
```

If you need it in production, replace `--save-dev` with `--save`.

If a component/pattern has JavaScript it is placed in the HTML.erb file. Feel free to place it somewhere else in your project.

# Using Refills

#### Scss

All components/pattern should be fully responsive and follow the [Neat examples](http://neat.bourbon.io/examples).

Avoid more than 2 levels of nesting for clarity and legibility of code.

Try to use as little styling as possible. Use the styles that come with Bitters to keep everything consistent.

Put media queries inline, don’t separate them since that will create a lot of repetitions of class names. If needed, for the sake of clarity, create a specific variable for a media query if a certain breakpoint changes the component/pattern drastically:

```scss
$tab-mode: $medium-screen;

@include media($tab-mode) { // $tab-mode is the same as $medium-screen here
  border-radius: 0;
}
```

Create variables for any color or size that might appear in a refill, especially if it appears more than once in the component/pattern.

Declare the variables inside of the component/pattern’s class like below. Note that variables should be interdependent to enable quick restyling.

```scss
.card {
  $card-border-color: $base-border-color;
  $card-border: 1px solid $card-border-color;
  $card-background: lighten($card-border-color, 10);
  &hellip;
```

# Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Refills is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Whenever a code snippet is borrowed or inspired by existing code, we try to credit the original developer/designer in our source code. Let us know if you think we have missed to do this.

Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

# License

Refills is Copyright © 2014 thoughtbot. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.txt) file.