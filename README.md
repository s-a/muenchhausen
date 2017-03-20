# muenchhausen [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/504801d3fc0d4d259a9160cc6b8cf492)](https://www.codacy.com/app/stephanahlf/muenchhausen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s-a/muenchhausen&amp;utm_campaign=Badge_Grade)
> fake data

## Installation

```sh
$ npm install --save muenchhausen
```

## Usage
```javascript
var muenchhausen = new Muenchhausen("de");
var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
var news = muenchhausen.render(merchandiseTVSpotText);
console.log(news);
```

## Client

A shell client is avialable at [muenchhausen-client](https://github.com/s-a/muenchhausen-client). 

## API
 A detailed API description is available at [https://github.com/s-a/muenchhausen/blob/master/docs/index.md](https://github.com/s-a/muenchhausen/blob/master/docs/index.md)


## Benchmark

time: Monday, March 20, 2017 at 9:42:52 AM GMT+01:00
node: v6.9.2 on win32 x64 v10.0.14393 with 8461197312 total memory.
cpu: Intel® Core™ i5-4460 speed: 3.2 cores:4

muenchhausen.date.future x 125,132 ops/sec ±0.22% (94 runs sampled)
faker.date.future x 78,834 ops/sec ±1.95% (90 runs sampled)
Fastest is muenchhausen.date.future

muenchhausen.date.random x 148,154 ops/sec ±1.27% (94 runs sampled)
faker.date.future x 79,741 ops/sec ±1.97% (89 runs sampled)
Fastest is muenchhausen.date.random

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
