# Benchmark

Tested at 22/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.

:clock10: muenchhausen.random.element (Object) x 18,321,606 ops/sec ±4.02% (80 runs sampled)  
:clock1: faker.random.objectElement x 2,952,116 ops/sec ±2.12% (90 runs sampled)  
muenchhausen.random.element (Object)  


:clock10: muenchhausen.random.element (Array) x 20,382,537 ops/sec ±3.15% (83 runs sampled)  
:clock1: faker.random.arrayElement x 6,365,149 ops/sec ±1.55% (90 runs sampled)  
muenchhausen.random.element (Array)  


:clock10: muenchhausen.boolean.random x 442,952 ops/sec ±1.87% (88 runs sampled)  
:clock1: faker.random.boolean x 132,756 ops/sec ±2.07% (90 runs sampled)  
muenchhausen.boolean.random  


:clock10: muenchhausen.decimal.random x 208,370 ops/sec ±2.35% (89 runs sampled)  
:clock1: faker.finance.amount x 131,545 ops/sec ±2.48% (90 runs sampled)  
muenchhausen.decimal.random  


:clock10: muenchhausen.number.random x 263,835 ops/sec ±3.19% (90 runs sampled)  
:clock1: faker.random.number x 130,890 ops/sec ±3.07% (89 runs sampled)  
muenchhausen.number.random  


:clock10: muenchhausen.date.future x 126,906 ops/sec ±0.28% (95 runs sampled)  
:clock1: faker.date.future x 86,301 ops/sec ±2.40% (93 runs sampled)  
muenchhausen.date.future  


:clock10: muenchhausen.date.past x 126,737 ops/sec ±0.22% (93 runs sampled)  
:clock1: faker.date.past x 84,610 ops/sec ±2.88% (85 runs sampled)  
muenchhausen.date.past  


:clock10: muenchhausen.date.random x 154,711 ops/sec ±2.27% (96 runs sampled)  
:clock1: faker.date.future x 85,425 ops/sec ±2.89% (90 runs sampled)  
muenchhausen.date.random  


:clock10: muenchhausen.date.month x 458,407 ops/sec ±1.91% (90 runs sampled)  
:clock1: faker.date.month x 126,490 ops/sec ±3.69% (84 runs sampled)  
muenchhausen.date.month  


:clock10: muenchhausen.date.weekday x 392,399 ops/sec ±2.19% (90 runs sampled)  
:clock1: faker.date.weekday x 132,415 ops/sec ±2.88% (88 runs sampled)  
muenchhausen.date.weekday  


:clock10: muenchhausen.phone.international x 795,129 ops/sec ±3.08% (87 runs sampled)  
:clock1: faker.phone x 276,873 ops/sec ±0.63% (95 runs sampled)  
muenchhausen.phone.international  


