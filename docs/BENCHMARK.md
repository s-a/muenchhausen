# Benchmark

Tested at 2017/02/20 21:19:28
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores

- `muenchhausen.date.future x 120,745 ops/sec ±2.19% (90 runs sampled)`  
- `faker.date.future x 81,004 ops/sec ±2.26% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 116,687 ops/sec ±2.38% (87 runs sampled)`  
- `faker.date.past x 72,168 ops/sec ±6.00% (78 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 145,192 ops/sec ±2.99% (86 runs sampled)`  
- `faker.date.future x 78,258 ops/sec ±2.81% (84 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 475,631 ops/sec ±2.86% (85 runs sampled)`  
- `faker.date.month x 127,658 ops/sec ±2.38% (82 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 474,427 ops/sec ±0.24% (91 runs sampled)`  
- `faker.date.weekday x 127,803 ops/sec ±2.42% (91 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 864,913 ops/sec ±2.15% (89 runs sampled)`  
- `faker.phone x 201,366 ops/sec ±0.64% (91 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
