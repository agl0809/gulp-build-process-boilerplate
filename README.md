# gulp-build-process-boilerplate
[![Build Status](https://travis-ci.org/agl0809/gulp-build-process-boilerplate.svg?branch=master)](https://travis-ci.org/agl0809/gulp-build-process-boilerplate)

Project with a grunt process with:

* Gulp as build system automating tasks like concat and uglify
* JSHint

Start by installing the required node modules:

`npm install`

Gulp should be installed globally

```shell
npm install gulp -g
```

You can then run the following tasks:

* `gulp build` - Checking code quality and generating build code.

You could install dependencies manually

```
npm install gulp --save-dev
npm install gulp-concat --save-dev
npm install gulp-jshint --save-dev
npm install gulp-notify --save-dev
npm install gulp-rename --save-dev
npm install gulp-uglify --save-dev
npm install jshint --save-dev
npm install jshint-stylish --save-dev
npm install del --save-dev
```

Preparing continuos integration with travis-ci

Add `.travis.yml` file and include basic configuration.

```
language: node_js
node_js:
  - "stable"
before_install: npm install -g gulp
install: npm install
before_script: gulp build
```
