# Benchmark

Tested at 22/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
```bash
$ muenchhausen.random.element (Object) x 21,153,644 ops/sec ±1.33% (88 runs sampled)
$ faker.random.objectElement x 2,933,502 ops/sec ±1.26% (93 runs sampled)
Fastest: muenchhausen.random.element (Object)

$ muenchhausen.random.element (Array) x 21,934,272 ops/sec ±1.23% (91 runs sampled)
$ faker.random.arrayElement x 6,551,671 ops/sec ±2.03% (88 runs sampled)
Fastest: muenchhausen.random.element (Array)

$ muenchhausen.boolean.random x 442,412 ops/sec ±2.58% (89 runs sampled)
$ faker.random.boolean x 122,107 ops/sec ±3.95% (87 runs sampled)
Fastest: muenchhausen.boolean.random

$ muenchhausen.decimal.random x 192,820 ops/sec ±3.17% (83 runs sampled)
$ faker.finance.amount x 123,942 ops/sec ±2.44% (89 runs sampled)
Fastest: muenchhausen.decimal.random

$ muenchhausen.number.random x 267,227 ops/sec ±2.13% (92 runs sampled)
$ faker.random.number x 124,832 ops/sec ±2.94% (87 runs sampled)
Fastest: muenchhausen.number.random

$ muenchhausen.date.future x 123,795 ops/sec ±0.37% (94 runs sampled)
$ faker.date.future x 84,607 ops/sec ±2.89% (91 runs sampled)
Fastest: muenchhausen.date.future

$ muenchhausen.date.past x 123,323 ops/sec ±0.20% (95 runs sampled)
$ faker.date.past x 84,020 ops/sec ±2.15% (93 runs sampled)
Fastest: muenchhausen.date.past

$ muenchhausen.date.random x 148,685 ops/sec ±1.75% (90 runs sampled)
$ faker.date.future x 84,784 ops/sec ±2.10% (90 runs sampled)
Fastest: muenchhausen.date.random

$ muenchhausen.date.month x 459,273 ops/sec ±2.58% (92 runs sampled)
$ faker.date.month x 131,809 ops/sec ±2.17% (94 runs sampled)
Fastest: muenchhausen.date.month

$ muenchhausen.date.weekday x 395,398 ops/sec ±1.73% (91 runs sampled)
$ faker.date.weekday x 129,437 ops/sec ±2.99% (89 runs sampled)
Fastest: muenchhausen.date.weekday

$ muenchhausen.phone.international x 849,530 ops/sec ±2.38% (91 runs sampled)
$ faker.phone x 280,708 ops/sec ±0.23% (95 runs sampled)
Fastest: muenchhausen.phone.international

```
