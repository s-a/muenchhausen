# Benchmark

Tested at 21/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.number.random x 246,527 ops/sec ±1.85% (88 runs sampled)`  
- `faker.random.number x 129,502 ops/sec ±2.77% (82 runs sampled)`  
  - Fastest is `muenchhausen.number.random`  
  
- `muenchhausen.date.future x 113,286 ops/sec ±2.06% (88 runs sampled)`  
- `faker.date.future x 73,876 ops/sec ±4.79% (78 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 112,996 ops/sec ±4.19% (86 runs sampled)`  
- `faker.date.past x 81,014 ops/sec ±2.84% (86 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 143,361 ops/sec ±1.67% (89 runs sampled)`  
- `faker.date.future x 81,486 ops/sec ±2.89% (83 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 436,374 ops/sec ±2.43% (85 runs sampled)`  
- `faker.date.month x 130,086 ops/sec ±3.24% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 366,961 ops/sec ±2.88% (85 runs sampled)`  
- `faker.date.weekday x 120,592 ops/sec ±4.94% (84 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 826,093 ops/sec ±3.15% (86 runs sampled)`  
- `faker.phone x 186,620 ops/sec ±0.86% (91 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
