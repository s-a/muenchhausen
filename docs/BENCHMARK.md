# Benchmark
  
Tested at 25/02/2017
 with node v7.7.4 on win32 x64 v10.0.10586 with 12776148992 total memory and
 Intel® Core™ i5-6200U 2.3 4 cores.
  
## Versions
 - Muenchhausen 0.0.6
 - faker.js ^4.1.0
  
:clock10: muenchhausen.fake.person.lastname x 20,677,061 ops/sec ±0.46% (91 runs sampled)  
:clock1: faker.name.lastName x 3,643,470 ops/sec ±0.36% (94 runs sampled)  
:+1: muenchhausen.fake.person.lastname  

:clock10: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 2,068,832 ops/sec ±1.09% (94 runs sampled)  
:clock1: faker.name.findName x 810,842 ops/sec ±0.40% (92 runs sampled)  
:+1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  

:clock10: muenchhausen.fake.company.name x 28,261,074 ops/sec ±0.87% (93 runs sampled)  
:clock1: faker.company.companyName x 58,587 ops/sec ±2.01% (91 runs sampled)  
:+1: muenchhausen.fake.company.name  

:clock10: muenchhausen.fake.person.firstname x 20,717,909 ops/sec ±2.51% (91 runs sampled)  
:clock1: faker.name.firstName x 2,766,545 ops/sec ±1.77% (93 runs sampled)  
:+1: muenchhausen.fake.person.firstname  

:clock10: muenchhausen.random.element (Object) x 22,121,119 ops/sec ±0.56% (91 runs sampled)  
:clock1: faker.random.objectElement x 2,985,518 ops/sec ±1.27% (89 runs sampled)  
:+1: muenchhausen.random.element (Object)  

:clock10: muenchhausen.random.element (Array) x 22,666,347 ops/sec ±1.42% (92 runs sampled)  
:clock1: faker.random.arrayElement x 6,170,193 ops/sec ±2.13% (89 runs sampled)  
:+1: muenchhausen.random.element (Array)  

:clock10: muenchhausen.boolean.random x 425,038 ops/sec ±2.13% (89 runs sampled)  
:clock1: faker.random.boolean x 117,031 ops/sec ±3.61% (86 runs sampled)  
:+1: muenchhausen.boolean.random  

:clock10: muenchhausen.decimal.random x 201,036 ops/sec ±2.46% (88 runs sampled)  
:clock1: faker.finance.amount x 124,487 ops/sec ±2.58% (88 runs sampled)  
:+1: muenchhausen.decimal.random  

:clock10: muenchhausen.number.random x 239,869 ops/sec ±5.27% (84 runs sampled)  
:clock1: faker.random.number x 117,514 ops/sec ±3.57% (85 runs sampled)  
:+1: muenchhausen.number.random  

:clock10: muenchhausen.date.future x 109,633 ops/sec ±3.21% (85 runs sampled)  
:clock1: faker.date.future x 83,667 ops/sec ±3.11% (89 runs sampled)  
:+1: muenchhausen.date.future  

:clock10: muenchhausen.date.past x 111,379 ops/sec ±3.26% (84 runs sampled)  
:clock1: faker.date.past x 81,275 ops/sec ±3.34% (87 runs sampled)  
:+1: muenchhausen.date.past  

:clock10: muenchhausen.date.random x 144,197 ops/sec ±1.27% (88 runs sampled)  
:clock1: faker.date.future x 82,825 ops/sec ±4.23% (85 runs sampled)  
:+1: muenchhausen.date.random  

:clock10: muenchhausen.date.month x 469,297 ops/sec ±1.00% (92 runs sampled)  
:clock1: faker.date.month x 125,867 ops/sec ±3.31% (90 runs sampled)  
:+1: muenchhausen.date.month  

:clock10: muenchhausen.date.weekday x 374,754 ops/sec ±3.38% (89 runs sampled)  
:clock1: faker.date.weekday x 121,781 ops/sec ±3.95% (89 runs sampled)  
:+1: muenchhausen.date.weekday  

:clock10: muenchhausen.phone.international x 812,554 ops/sec ±3.48% (91 runs sampled)  
:clock1: faker.phone x 266,971 ops/sec ±0.40% (94 runs sampled)  
:+1: muenchhausen.phone.international  

