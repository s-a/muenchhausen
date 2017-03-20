# Benchmark

Tested at [object Object]
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.date.future x 130,054 ops/sec ±0.75% (92 runs sampled)`  
- `faker.date.future x 84,552 ops/sec ±1.96% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 128,835 ops/sec ±0.84% (92 runs sampled)`  
- `faker.date.past x 84,519 ops/sec ±2.20% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 161,962 ops/sec ±1.13% (91 runs sampled)`  
- `faker.date.future x 83,096 ops/sec ±1.85% (91 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 557,678 ops/sec ±1.04% (93 runs sampled)`  
- `faker.date.month x 130,724 ops/sec ±2.19% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 469,716 ops/sec ±2.04% (91 runs sampled)`  
- `faker.date.weekday x 129,604 ops/sec ±2.37% (92 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 838,687 ops/sec ±3.22% (86 runs sampled)`  
- `faker.phone x 201,718 ops/sec ±0.20% (91 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
