# Benchmark

Tested at 2017/02/20 21:23:48
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.date.future x 131,762 ops/sec ±0.71% (90 runs sampled)`  
- `faker.date.future x 86,865 ops/sec ±1.88% (91 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 132,054 ops/sec ±0.88% (93 runs sampled)`  
- `faker.date.past x 84,291 ops/sec ±1.66% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 164,978 ops/sec ±0.86% (93 runs sampled)`  
- `faker.date.future x 82,081 ops/sec ±1.93% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 552,579 ops/sec ±0.96% (92 runs sampled)`  
- `faker.date.month x 132,767 ops/sec ±2.37% (91 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 457,333 ops/sec ±0.25% (93 runs sampled)`  
- `faker.date.weekday x 133,424 ops/sec ±2.31% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 861,873 ops/sec ±2.95% (89 runs sampled)`  
- `faker.phone x 203,668 ops/sec ±0.18% (95 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
