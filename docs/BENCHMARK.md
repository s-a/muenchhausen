# Benchmark

Tested at 21/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.date.future x 118,032 ops/sec ±0.86% (89 runs sampled)`  
- `faker.date.future x 85,092 ops/sec ±1.79% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 120,997 ops/sec ±1.17% (92 runs sampled)`  
- `faker.date.past x 85,523 ops/sec ±2.02% (90 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 149,836 ops/sec ±0.78% (94 runs sampled)`  
- `faker.date.future x 83,742 ops/sec ±1.84% (92 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 467,874 ops/sec ±1.19% (93 runs sampled)`  
- `faker.date.month x 128,688 ops/sec ±2.50% (90 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 389,856 ops/sec ±1.76% (92 runs sampled)`  
- `faker.date.weekday x 129,706 ops/sec ±2.34% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 860,502 ops/sec ±2.72% (88 runs sampled)`  
- `faker.phone x 191,445 ops/sec ±3.10% (88 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
