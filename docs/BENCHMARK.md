# Benchmark
  
Tested at 24/02/2017
 with node v7.3.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
  
## Versions
 - Muenchhausen 0.0.5
 - faker.js ^4.1.0
  
:clock10: muenchhausen.fake.person.lastname x 19,435,627 ops/sec ±1.88% (89 runs sampled)  
:clock1: faker.name.lastName x 3,615,573 ops/sec ±1.17% (92 runs sampled)  
muenchhausen.fake.person.lastname  


:clock10: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 1,999,971 ops/sec ±1.47% (93 runs sampled)  
:clock1: faker.name.findName x 822,144 ops/sec ±0.82% (93 runs sampled)  
muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  


:clock10: muenchhausen.fake.company.name x 26,761,369 ops/sec ±1.11% (91 runs sampled)  
:clock1: faker.company.companyName x 59,352 ops/sec ±2.49% (89 runs sampled)  
muenchhausen.fake.company.name  


:clock10: muenchhausen.fake.person.firstname x 19,543,532 ops/sec ±1.82% (91 runs sampled)  
:clock1: faker.name.firstName x 2,862,167 ops/sec ±1.09% (90 runs sampled)  
muenchhausen.fake.person.firstname  


:clock10: muenchhausen.random.element (Object) x 21,948,778 ops/sec ±1.03% (94 runs sampled)  
:clock1: faker.random.objectElement x 3,147,959 ops/sec ±1.40% (91 runs sampled)  
muenchhausen.random.element (Object)  


:clock10: muenchhausen.random.element (Array) x 21,973,968 ops/sec ±2.17% (88 runs sampled)  
:clock1: faker.random.arrayElement x 6,585,114 ops/sec ±1.08% (93 runs sampled)  
muenchhausen.random.element (Array)  


:clock10: muenchhausen.boolean.random x 466,666 ops/sec ±1.37% (93 runs sampled)  
:clock1: faker.random.boolean x 132,452 ops/sec ±2.39% (87 runs sampled)  
muenchhausen.boolean.random  


:clock10: muenchhausen.decimal.random x 206,660 ops/sec ±1.91% (92 runs sampled)  
:clock1: faker.finance.amount x 130,486 ops/sec ±2.17% (91 runs sampled)  
muenchhausen.decimal.random  


:clock10: muenchhausen.number.random x 265,121 ops/sec ±2.15% (93 runs sampled)  
:clock1: faker.random.number x 130,921 ops/sec ±2.35% (89 runs sampled)  
muenchhausen.number.random  


:clock10: muenchhausen.date.future x 124,674 ops/sec ±0.62% (94 runs sampled)  
:clock1: faker.date.future x 80,277 ops/sec ±6.47% (82 runs sampled)  
muenchhausen.date.future  


:clock10: muenchhausen.date.past x 97,379 ops/sec ±8.11% (77 runs sampled)  
:clock1: faker.date.past x 73,809 ops/sec ±4.44% (80 runs sampled)  
muenchhausen.date.past  


:clock10: muenchhausen.date.random x 136,826 ops/sec ±3.53% (83 runs sampled)  
:clock1: faker.date.future x 78,128 ops/sec ±2.98% (85 runs sampled)  
muenchhausen.date.random  


:clock10: muenchhausen.date.month x 457,456 ops/sec ±1.27% (91 runs sampled)  
:clock1: faker.date.month x 123,937 ops/sec ±3.40% (90 runs sampled)  
muenchhausen.date.month  


:clock10: muenchhausen.date.weekday x 377,883 ops/sec ±2.38% (91 runs sampled)  
:clock1: faker.date.weekday x 128,325 ops/sec ±2.49% (91 runs sampled)  
muenchhausen.date.weekday  


:clock10: muenchhausen.phone.international x 824,999 ops/sec ±2.59% (86 runs sampled)  
:clock1: faker.phone x 267,081 ops/sec ±0.49% (93 runs sampled)  
muenchhausen.phone.international  


