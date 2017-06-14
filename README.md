# MUENCHHAUSEN [![Muenchhausen Logo](/resources/logo-sm.png)](/README.md)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/504801d3fc0d4d259a9160cc6b8cf492)](https://www.codacy.com/app/stephanahlf/muenchhausen?utm_source=github.com&utm_medium=referral&utm_content=s-a/muenchhausen&utm_campaign=Badge_Grade)[![Donate](http://s-a.github.io/donate/donate.svg)](http://s-a.github.io/donate/)

> Make your test data look real. In [Node](https://npm.runkit.com/muenchhausen) and in [Browser](https://s-a.github.io/muenchhausen/)

## Installation

```sh
npm install --save muenchhausen
```

## Usage

`Muenchhausen` expects a culture string as parameter like "de-DE" or "en-GB". All available cultures are listed in [cultures.json](https://github.com/s-a/muenchhausen/blob/master/lib/cultures.json)

```javascript
var Muenchhausen = require("muenchhausen");
var muenchhausen = new Muenchhausen("de-DE");
```

### Render

```javascript
var muenchhausen = new Muenchhausen("en-GB");
var news = muenchhausen.render("$(date.now.text) - $(date.random.value min:20200901)  $(date.random)");
console.log(news);

/*
yields => 13/05/2017 - Thu Jul 14 8416 12:51:52 GMT+0200 (Mitteleuropäische Sommerzeit)  06/00/2784
*/
```

### Programmatically

```javascript
var muenchhausen = new Muenchhausen("ja-JP");
console.log(muenchhausen.fake.date.now({}).text());
console.log(muenchhausen.fake.date.weekday().text());

/*
yields =>
2017/02/22
金曜日
*/
```

## Benchmarks

[/docs/BENCHMARK.md](docs/BENCHMARK.md)

## Client

A shell client is avialable at [muenchhausen-client](https://github.com/s-a/muenchhausen-client).

## API

[/docs/](docs/)

## Contribute

Please read [/CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Write your own extension

[fake/random](https://github.com/s-a/muenchhausen/blob/master/lib/fake/random/index.js) is a pretty simple starting point to see how a muenchhausen extension works.

In generall it contains a simple node module. Methods prefixed with `_` are private. Unprefixed funtions are available in the public `render` method and will be scanned while the module unit tests. Each unprefixed function have to return an object with the **_property_** `value` and a **_function_** called `text`.

-   [x] `.text()` should optionaly process given parms and render a text representation of `.value`.
-   [x] `.value` should hold the native JavaScript value (if possible).

### Nice to have

-   [x] new [unit test(s)](/test/).
    -   [ ] write unit tests and run `npm test` or `mocha` for faster results.
-   [x] new [benchmark(s)](/scripts/benchmark.js).
    -   [ ] write a benchmark or more and run `npm run benchmark` which will update [BENCHMARK.md](/docs/BENCHMARK.md).
-   [x] new doc(s).
    -   [ ] Add jsdox descptions to your public function headers and `npm run docs` will update [/docs](/docs/) folder.
-   [x] Error and code coverage test.
    -   [ ] run `npm test` to start gulp taks. Fix eslint error and check your code coverage described in muenchhausen/coverage/lcov-report/index.html.

## License

MIT © [s-a](https://github.com/s-a)

[npm-image]: https://badge.fury.io/js/muenchhausen.svg

[npm-url]: https://npmjs.org/package/muenchhausen

[travis-image]: https://travis-ci.org/s-a/muenchhausen.svg?branch=master

[travis-url]: https://travis-ci.org/s-a/muenchhausen

[daviddm-image]: https://david-dm.org/s-a/muenchhausen.svg?theme=shields.io

[daviddm-url]: https://david-dm.org/s-a/muenchhausen

[coveralls-image]: https://coveralls.io/repos/github/s-a/muenchhausen/badge.svg?branch=master

[coveralls-url]: https://coveralls.io/github/s-a/muenchhausen?branch=master
  