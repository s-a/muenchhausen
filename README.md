# MUENCHHAUSEN [![Muenchhausen Logo](/resources/logo-sm.png)](/README.md) 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/504801d3fc0d4d259a9160cc6b8cf492)](https://www.codacy.com/app/stephanahlf/muenchhausen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s-a/muenchhausen&amp;utm_campaign=Badge_Grade)
> Make your test data look real.

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
var muenchhausen = new Muenchhausen("de-DE");
var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
var news = muenchhausen.render(merchandiseTVSpotText);
console.log(news);

/*
yields => 22/02/2017-Wed Jan 30 7219 23:35:07 GMT+0100 (Mitteleuropäische Zeit)  18/07/2984
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


In generall it contains a simple node module. Methods prefixed with `_` are private. Unprefixed funtions are available in the public `render` method and will be scanned while the module unit tests.


Each unprefixed function have to return an object with the ***property*** `value` and a ***function*** called `text`. `.value` should hold the native JavaScript value (if possible). `.text()` should process given parms and render a text representation of `.value`.

### Nice to have

- [x] new [test(s)](/test/).
  - [ ] write tests and run `npm test` or `mocha` for faster results.
- [x] new [benchmark(s)](/scripts/benchmark.js).
  - [ ] write benchmark and run `npm run benchmark` which will update [BENCHMARK.md](/docs/BENCHMARK.md).
- [x] new [doc(s)](/docs/).
  - [ ] Add jsdox descptions to your public function headers and `npm run docs` will update [/docs](/docs/) folder.

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