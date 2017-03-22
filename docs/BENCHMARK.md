# Benchmark

Tested at 22/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.

:clock10: muenchhausen.random.element (Object) x 21,681,383 ops/sec ±0.94% (89 runs sampled)
:clock1: faker.random.objectElement x 3,068,057 ops/sec ±1.18% (93 runs sampled)
:stopwatch: muenchhausen.random.element (Object)

:clock10: muenchhausen.random.element (Array) x 22,546,359 ops/sec ±0.77% (93 runs sampled)
:clock1: faker.random.arrayElement x 6,670,794 ops/sec ±0.82% (92 runs sampled)
:stopwatch: muenchhausen.random.element (Array)

:clock10: muenchhausen.boolean.random x 447,656 ops/sec ±1.06% (86 runs sampled)
:clock1: faker.random.boolean x 130,301 ops/sec ±2.24% (87 runs sampled)
:stopwatch: muenchhausen.boolean.random

:clock10: muenchhausen.decimal.random x 193,939 ops/sec ±2.51% (92 runs sampled)
:clock1: faker.finance.amount x 127,408 ops/sec ±2.54% (90 runs sampled)
:stopwatch: muenchhausen.decimal.random

:clock10: muenchhausen.number.random x 245,487 ops/sec ±1.99% (91 runs sampled)
:clock1: faker.random.number x 126,151 ops/sec ±2.82% (91 runs sampled)
:stopwatch: muenchhausen.number.random

:clock10: muenchhausen.date.future x 125,462 ops/sec ±0.23% (95 runs sampled)
:clock1: faker.date.future x 87,152 ops/sec ±2.18% (91 runs sampled)
:stopwatch: muenchhausen.date.future

:clock10: muenchhausen.date.past x 121,725 ops/sec ±1.64% (92 runs sampled)
:clock1: faker.date.past x 85,242 ops/sec ±2.07% (91 runs sampled)
:stopwatch: muenchhausen.date.past

:clock10: muenchhausen.date.random x 155,323 ops/sec ±0.27% (94 runs sampled)
:clock1: faker.date.future x 78,475 ops/sec ±5.44% (80 runs sampled)
:stopwatch: muenchhausen.date.random

:clock10: muenchhausen.date.month x 463,939 ops/sec ±0.95% (93 runs sampled)
:clock1: faker.date.month x 131,744 ops/sec ±2.89% (91 runs sampled)
:stopwatch: muenchhausen.date.month

:clock10: muenchhausen.date.weekday x 394,379 ops/sec ±0.31% (95 runs sampled)
:clock1: faker.date.weekday x 134,027 ops/sec ±1.89% (88 runs sampled)
:stopwatch: muenchhausen.date.weekday

:clock10: muenchhausen.phone.international x 852,787 ops/sec ±3.20% (89 runs sampled)
:clock1: faker.phone x 278,208 ops/sec ±0.15% (92 runs sampled)
:stopwatch: muenchhausen.phone.international

