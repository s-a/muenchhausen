# Benchmark

Tested at Monday, March 20, 2017 at 3:18:14 PM GMT+01:00
 with node v6.9.2 on win32 x64 v10.0.14393 with 8461197312 total memory and
 Intel® Core™ i5-4460 3.2 4 cores

- `muenchhausen.date.future x 130,232 ops/sec ±0.26% (93 runs sampled)`  
- `faker.date.future x 77,343 ops/sec ±1.85% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 130,052 ops/sec ±0.97% (93 runs sampled)`  
- `faker.date.past x 76,680 ops/sec ±1.71% (92 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 152,996 ops/sec ±1.52% (89 runs sampled)`  
- `faker.date.future x 76,939 ops/sec ±1.63% (93 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 357,472 ops/sec ±1.46% (94 runs sampled)`  
- `faker.date.month x 112,600 ops/sec ±1.81% (93 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 355,775 ops/sec ±1.49% (94 runs sampled)`  
- `faker.date.weekday x 112,174 ops/sec ±1.89% (90 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 665,163 ops/sec ±2.33% (89 runs sampled)`  
- `faker.phone x 278,437 ops/sec ±0.19% (92 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
