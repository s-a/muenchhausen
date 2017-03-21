# Benchmark

Tested at [object Object]
 with node v6.9.2 on win32 x64 v10.0.14393 with 8461197312 total memory and
 Intel® Core™ i5-4460 3.2 4 cores

- `muenchhausen.date.future x 123,149 ops/sec ±1.14% (90 runs sampled)`  
- `faker.date.future x 67,905 ops/sec ±7.11% (85 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 123,030 ops/sec ±1.31% (88 runs sampled)`  
- `faker.date.past x 70,485 ops/sec ±1.96% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 152,092 ops/sec ±1.23% (93 runs sampled)`  
- `faker.date.future x 70,506 ops/sec ±2.10% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 455,769 ops/sec ±1.90% (87 runs sampled)`  
- `faker.date.month x 107,180 ops/sec ±1.80% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 353,795 ops/sec ±2.01% (88 runs sampled)`  
- `faker.date.weekday x 103,542 ops/sec ±2.45% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 659,800 ops/sec ±1.98% (86 runs sampled)`  
- `faker.phone x 224,149 ops/sec ±0.45% (89 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
