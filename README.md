# denkstrap testing

denkwerk standard testing tools

[https://www.denkwerk.com](https://www.denkwerk.com)

### Based on

* [Sass Guidelines](http://sass-guidelin.es/) by the wonderful [Hugo Giraudel](http://hugogiraudel.com/)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint) which uses the Ruby Gem [scss-lint](https://github.com/brigade/scss-lint)

## Installation

1. The Grunt plugin is based on a Ruby Gem, which is required to install first.
Once you installed it, you can use it globally for every project.

```
gem install scss-lint -v 0.32.0
```

2. Install Node modules

```
npm install
```

This installs

* grunt
* grunt-scss-lint (the Grunt plugin)
* load-grunt-config (split Grunt config one file per task
* load-grunt-tasks (load Grunt task automated)

## Usage

```
grunt test
```

Runs the SCSS Lint task. In the file src/sass/_example.scss there are 2 style examples defined to demonstrate a selector nesting depth error.

```
// Good style
.stage__teaser__headline__icon {
    color: green;
}

// Bad style
.stage .teaser .headline .icon {
    color: red;
}
```

Fix this error and you're good to go ;)
