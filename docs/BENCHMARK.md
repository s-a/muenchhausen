# Benchmark

Tested at Monday, March 20, 2017 at 1:14:15 PM GMT+01:00
 with node v6.9.2 on win32 x64 v10.0.14393 with 8461197312 total memory and
 Intel® Core™ i5-4460 3.2 4 cores

- `muenchhausen.date.future x 134,382 ops/sec ±0.54% (93 runs sampled)`  
- `faker.date.future x 76,560 ops/sec ±2.02% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 126,330 ops/sec ±1.63% (92 runs sampled)`  
- `faker.date.past x 75,554 ops/sec ±1.74% (85 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 157,219 ops/sec ±1.23% (93 runs sampled)`  
- `faker.date.future x 74,891 ops/sec ±2.05% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 353,966 ops/sec ±0.34% (91 runs sampled)`  
- `faker.date.month x 108,234 ops/sec ±2.30% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 360,550 ops/sec ±0.40% (94 runs sampled)`  
- `faker.date.weekday x 106,325 ops/sec ±2.86% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
