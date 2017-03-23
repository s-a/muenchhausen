^4.1.0
# Benchmark
  
Tested at 23/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
  
## Versions
 - Muenchhausen 0.0.3
 - faker.js ^4.1.0
  
:clock10: muenchhausen.fake.person.firstname x 19,461,702 ops/sec ±0.94% (93 runs sampled)  
:clock1: faker.name.firstName x 3,722,194 ops/sec ±1.05% (93 runs sampled)  
muenchhausen.fake.person.firstname  


:clock10: muenchhausen.random.element (Object) x 21,908,783 ops/sec ±0.77% (92 runs sampled)  
:clock1: faker.random.objectElement x 3,123,427 ops/sec ±0.92% (91 runs sampled)  
muenchhausen.random.element (Object)  


:clock10: muenchhausen.random.element (Array) x 22,273,085 ops/sec ±1.41% (90 runs sampled)  
:clock1: faker.random.arrayElement x 6,633,586 ops/sec ±0.91% (90 runs sampled)  
muenchhausen.random.element (Array)  


:clock10: muenchhausen.boolean.random x 454,588 ops/sec ±1.73% (87 runs sampled)  
:clock1: faker.random.boolean x 126,516 ops/sec ±2.18% (89 runs sampled)  
muenchhausen.boolean.random  


:clock10: muenchhausen.decimal.random x 203,228 ops/sec ±2.28% (89 runs sampled)  
:clock1: faker.finance.amount x 112,369 ops/sec ±4.01% (81 runs sampled)  
muenchhausen.decimal.random  


:clock10: muenchhausen.number.random x 265,868 ops/sec ±2.98% (90 runs sampled)  
:clock1: faker.random.number x 129,461 ops/sec ±2.39% (90 runs sampled)  
muenchhausen.number.random  


:clock10: muenchhausen.date.future x 122,884 ops/sec ±0.31% (92 runs sampled)  
:clock1: faker.date.future x 83,676 ops/sec ±2.81% (92 runs sampled)  
muenchhausen.date.future  


:clock10: muenchhausen.date.past x 118,462 ops/sec ±1.78% (93 runs sampled)  
:clock1: faker.date.past x 81,516 ops/sec ±2.34% (87 runs sampled)  
muenchhausen.date.past  


:clock10: muenchhausen.date.random x 143,970 ops/sec ±1.12% (86 runs sampled)  
:clock1: faker.date.future x 78,222 ops/sec ±3.70% (82 runs sampled)  
muenchhausen.date.random  


:clock10: muenchhausen.date.month x 469,215 ops/sec ±1.65% (93 runs sampled)  
:clock1: faker.date.month x 126,898 ops/sec ±2.68% (86 runs sampled)  
muenchhausen.date.month  


:clock10: muenchhausen.date.weekday x 369,918 ops/sec ±1.84% (91 runs sampled)  
:clock1: faker.date.weekday x 125,481 ops/sec ±2.81% (87 runs sampled)  
muenchhausen.date.weekday  


:clock10: muenchhausen.phone.international x 831,717 ops/sec ±2.98% (87 runs sampled)  
:clock1: faker.phone x 271,872 ops/sec ±0.65% (93 runs sampled)  
muenchhausen.phone.international  


