# Benchmark

Tested at 22/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
```bash
$ muenchhausen.boolean.random x 443,461 ops/sec ±1.16% (90 runs sampled)
$ faker.random.boolean x 138,455 ops/sec ±2.39% (88 runs sampled)
Fastest: muenchhausen.boolean.random
$ muenchhausen.decimal.random x 197,843 ops/sec ±3.03% (88 runs sampled)
$ faker.finance.amount x 128,722 ops/sec ±2.90% (87 runs sampled)
Fastest: muenchhausen.decimal.random
$ muenchhausen.number.random x 267,267 ops/sec ±1.99% (92 runs sampled)
$ faker.random.number x 124,913 ops/sec ±2.19% (90 runs sampled)
Fastest: muenchhausen.number.random
$ muenchhausen.date.future x 127,419 ops/sec ±0.29% (93 runs sampled)
$ faker.date.future x 85,508 ops/sec ±3.02% (89 runs sampled)
Fastest: muenchhausen.date.future
$ muenchhausen.date.past x 126,186 ops/sec ±0.55% (92 runs sampled)
$ faker.date.past x 85,903 ops/sec ±2.49% (87 runs sampled)
Fastest: muenchhausen.date.past
$ muenchhausen.date.random x 157,236 ops/sec ±1.27% (94 runs sampled)
$ faker.date.future x 74,981 ops/sec ±4.88% (79 runs sampled)
Fastest: muenchhausen.date.random
$ muenchhausen.date.month x 468,399 ops/sec ±2.48% (93 runs sampled)
$ faker.date.month x 131,332 ops/sec ±2.41% (90 runs sampled)
Fastest: muenchhausen.date.month
$ muenchhausen.date.weekday x 407,397 ops/sec ±2.41% (91 runs sampled)
$ faker.date.weekday x 132,232 ops/sec ±2.67% (87 runs sampled)
Fastest: muenchhausen.date.weekday
$ muenchhausen.phone.international x 859,590 ops/sec ±2.06% (92 runs sampled)
$ faker.phone x 274,854 ops/sec ±0.20% (93 runs sampled)
Fastest: muenchhausen.phone.international
```
