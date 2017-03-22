

# MUENCHHAUSEN [![Muenchhausen Logo](/resources/logo-sm.png)]()

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/504801d3fc0d4d259a9160cc6b8cf492)](https://www.codacy.com/app/stephanahlf/muenchhausen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s-a/muenchhausen&amp;utm_campaign=Badge_Grade)
> fake data

## Installation

```sh
npm install --save muenchhausen
```

## Usage

`Muenchhausen` expects a culture string as parameter like "de-DE" or "en-GB". All available cultures are listed in [cultures.json](https://github.com/s-a/muenchhausen/blob/master/lib/cultures.json)

```javascript
var muenchhausen = new Muenchhausen("de-DE");
var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
var news = muenchhausen.render(merchandiseTVSpotText);
console.log(news);
```

## Client

A shell client is avialable at [muenchhausen-client](https://github.com/s-a/muenchhausen-client).

## API

A detailed API description is available at [/docs/](docs/)

## Benchmarks

See [/docs/BENCHMARK.md](docs/BENCHMARK.md)

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
