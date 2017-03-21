# Benchmark

Tested at [object Object]
 with node v6.9.2 on win32 x64 v10.0.14393 with 8461197312 total memory and
 Intel® Core™ i5-4460 3.2 4 cores

- `muenchhausen.date.future x 124,641 ops/sec ±1.37% (87 runs sampled)`  
- `faker.date.future x 73,634 ops/sec ±2.01% (87 runs sampled)`  
  - Fastest is `muenchhausen.date.future`  
  
- `muenchhausen.date.past x 128,281 ops/sec ±1.55% (87 runs sampled)`  
- `faker.date.past x 77,448 ops/sec ±1.99% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.past`  
  
- `muenchhausen.date.random x 157,082 ops/sec ±1.55% (92 runs sampled)`  
- `faker.date.future x 74,956 ops/sec ±1.84% (88 runs sampled)`  
  - Fastest is `muenchhausen.date.random`  
  
- `muenchhausen.date.month x 470,592 ops/sec ±1.11% (91 runs sampled)`  
- `faker.date.month x 107,105 ops/sec ±2.39% (85 runs sampled)`  
  - Fastest is `muenchhausen.date.month`  
  
- `muenchhausen.date.weekday x 408,743 ops/sec ±1.30% (90 runs sampled)`  
- `faker.date.weekday x 101,652 ops/sec ±2.76% (86 runs sampled)`  
  - Fastest is `muenchhausen.date.weekday`  
  
- `muenchhausen.phone.international x 662,238 ops/sec ±2.55% (86 runs sampled)`  
- `faker.phone x 228,570 ops/sec ±0.80% (92 runs sampled)`  
  - Fastest is `muenchhausen.phone.international`  
  
