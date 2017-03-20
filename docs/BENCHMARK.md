# Benchmark

Tested at Monday, March 20, 2017 at 8:20:33 PM GMT+01:00
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.date.future x 129,961 ops/sec ±1.40% (92 runs sampled)`  
- `faker.date.future x 87,498 ops/sec ±2.15% (85 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 127,264 ops/sec ±1.35% (90 runs sampled)`  
- `faker.date.past x 87,018 ops/sec ±1.89% (91 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 162,991 ops/sec ±0.37% (93 runs sampled)`  
- `faker.date.future x 84,660 ops/sec ±2.22% (90 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 546,630 ops/sec ±0.30% (95 runs sampled)`  
- `faker.date.month x 128,392 ops/sec ±2.94% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 446,128 ops/sec ±2.42% (93 runs sampled)`  
- `faker.date.weekday x 130,350 ops/sec ±2.61% (89 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 867,630 ops/sec ±2.68% (86 runs sampled)`  
- `faker.phone x 204,000 ops/sec ±1.10% (91 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
