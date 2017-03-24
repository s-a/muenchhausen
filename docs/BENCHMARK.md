# Benchmark
  
Tested at 23/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
  
## Versions
 - Muenchhausen 0.0.5
 - faker.js ^4.1.0
  
:clock10: muenchhausen.fake.company.name x 25,869,328 ops/sec ±1.73% (92 runs sampled)  
:clock1: faker.company.companyName x 58,918 ops/sec ±1.97% (91 runs sampled)  
muenchhausen.fake.company.name  


:clock10: muenchhausen.fake.person.firstname x 19,362,884 ops/sec ±1.71% (90 runs sampled)  
:clock1: faker.name.firstName x 2,444,925 ops/sec ±1.24% (92 runs sampled)  
muenchhausen.fake.person.firstname  


:clock10: muenchhausen.random.element (Object) x 21,598,878 ops/sec ±1.07% (91 runs sampled)  
:clock1: faker.random.objectElement x 3,095,949 ops/sec ±1.31% (90 runs sampled)  
muenchhausen.random.element (Object)  


:clock10: muenchhausen.random.element (Array) x 22,478,015 ops/sec ±1.00% (93 runs sampled)  
:clock1: faker.random.arrayElement x 6,539,279 ops/sec ±1.30% (92 runs sampled)  
muenchhausen.random.element (Array)  


:clock10: muenchhausen.boolean.random x 457,442 ops/sec ±1.34% (93 runs sampled)  
:clock1: faker.random.boolean x 130,858 ops/sec ±2.36% (90 runs sampled)  
muenchhausen.boolean.random  


:clock10: muenchhausen.decimal.random x 205,976 ops/sec ±1.92% (91 runs sampled)  
:clock1: faker.finance.amount x 129,690 ops/sec ±2.17% (90 runs sampled)  
muenchhausen.decimal.random  


:clock10: muenchhausen.number.random x 269,500 ops/sec ±1.80% (92 runs sampled)  
:clock1: faker.random.number x 127,967 ops/sec ±2.67% (88 runs sampled)  
muenchhausen.number.random  


:clock10: muenchhausen.date.future x 125,162 ops/sec ±2.29% (94 runs sampled)  
:clock1: faker.date.future x 87,193 ops/sec ±2.06% (88 runs sampled)  
muenchhausen.date.future  


:clock10: muenchhausen.date.past x 119,882 ops/sec ±1.80% (90 runs sampled)  
:clock1: faker.date.past x 86,185 ops/sec ±2.12% (87 runs sampled)  
muenchhausen.date.past  


:clock10: muenchhausen.date.random x 155,233 ops/sec ±1.09% (91 runs sampled)  
:clock1: faker.date.future x 86,456 ops/sec ±2.20% (88 runs sampled)  
muenchhausen.date.random  


:clock10: muenchhausen.date.month x 471,957 ops/sec ±1.16% (92 runs sampled)  
:clock1: faker.date.month x 132,423 ops/sec ±2.80% (88 runs sampled)  
muenchhausen.date.month  


:clock10: muenchhausen.date.weekday x 405,462 ops/sec ±0.29% (89 runs sampled)  
:clock1: faker.date.weekday x 134,189 ops/sec ±2.20% (91 runs sampled)  
muenchhausen.date.weekday  


:clock10: muenchhausen.phone.international x 846,001 ops/sec ±2.78% (89 runs sampled)  
:clock1: faker.phone x 274,796 ops/sec ±0.25% (92 runs sampled)  
muenchhausen.phone.international  


