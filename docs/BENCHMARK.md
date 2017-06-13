# Benchmarks
Tested at 13/05/2017
  
## Arena
Node.js v8.0.0 on win32 x64 v10.0.10586 with 12776148992 total memory and
Intel® Core™ i5-6200U 2.3 4 cores.
  
## Gladiators
 - Muenchhausen@0.0.9
 - faker.js@4.1.0
 - Chance.js@1.0.6
  
:clock1: muenchhausen.fake.person.lastname x 16,179,497 ops/sec ±0.77% (85 runs sampled)  
:clock10: faker.name.lastName x 4,279,685 ops/sec ±0.46% (93 runs sampled)  
:clock1030: chance.last x 1,271,000 ops/sec ±0.49% (93 runs sampled)  
:+1: muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 3,171,852 ops/sec ±0.87% (90 runs sampled)  
:clock10: faker.name.findName x 1,163,057 ops/sec ±0.34% (94 runs sampled)  
:clock1030: chance.name x 306,777 ops/sec ±3.80% (78 runs sampled)  
:+1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.company.name x 21,523,637 ops/sec ±1.05% (85 runs sampled)  
:clock10: faker.company.companyName x 48,245 ops/sec ±3.09% (77 runs sampled)  
:+1: muenchhausen.fake.company.name  

:clock1: muenchhausen.fake.person.firstname x 15,805,326 ops/sec ±1.54% (87 runs sampled)  
:clock10: faker.name.firstName x 3,572,128 ops/sec ±1.15% (90 runs sampled)  
:clock1030: chance.last x 821,518 ops/sec ±7.87% (62 runs sampled)  
:+1: muenchhausen.fake.person.firstname  

:clock1: muenchhausen.fake.random.element (Object) x 10,640,828 ops/sec ±7.58% (71 runs sampled)  
:clock10: faker.random.objectElement x 2,712,318 ops/sec ±3.33% (85 runs sampled)  
:+1: muenchhausen.fake.random.element (Object)  

:clock1: muenchhausen.fake.random.element (Array) x 17,812,341 ops/sec ±4.49% (81 runs sampled)  
:clock10: faker.random.arrayElement x 6,010,034 ops/sec ±0.44% (92 runs sampled)  
:clock1030: chance.pickone x 2,345,150 ops/sec ±1.93% (88 runs sampled)  
:+1: muenchhausen.fake.random.element (Array)  

:clock1: muenchhausen.fake.boolean.random x 20,448,092 ops/sec ±4.82% (81 runs sampled)  
:clock10: faker.random.boolean x 5,991,223 ops/sec ±1.38% (88 runs sampled)  
:clock1030: chance.bool x 2,925,685 ops/sec ±3.10% (79 runs sampled)  
:+1: muenchhausen.fake.boolean.random  

:clock1: muenchhausen.fake.decimal.random x 716,222 ops/sec ±4.76% (66 runs sampled)  
:clock1030: chance.floating x 388,389 ops/sec ±3.67% (77 runs sampled)  
:+1: muenchhausen.fake.decimal.random  

:clock1: muenchhausen.fake.number.random x 10,544,016 ops/sec ±2.24% (78 runs sampled)  
:clock10: faker.random.number x 5,856,589 ops/sec ±2.17% (81 runs sampled)  
:clock1030: chance.floating({fixed: 0}) x 480,183 ops/sec ±3.21% (84 runs sampled)  
:+1: muenchhausen.fake.number.random  

:clock1: muenchhausen.fake.date.future x 104,988 ops/sec ±3.10% (80 runs sampled)  
:clock10: faker.date.future x 69,293 ops/sec ±3.34% (77 runs sampled)  
:+1: muenchhausen.fake.date.future  

:clock1: muenchhausen.fake.date.past x 102,075 ops/sec ±3.58% (81 runs sampled)  
:clock10: faker.date.past x 70,398 ops/sec ±2.93% (79 runs sampled)  
:+1: muenchhausen.fake.date.past  

:clock1: muenchhausen.fake.date.random:   
:clock10: faker.date.future:   
:clock1030: chance.date x 126,331 ops/sec ±2.46% (83 runs sampled)  
:+1: chance.date  

:clock1: muenchhausen.fake.date.month x 15,391,395 ops/sec ±2.68% (80 runs sampled)  
:clock10: faker.date.month:   
:clock1030: chance.month x 822,437 ops/sec ±2.35% (82 runs sampled)  
:+1: muenchhausen.fake.date.month  

:clock1: muenchhausen.fake.date.weekday x 328,512 ops/sec ±2.72% (79 runs sampled)  
:clock10: faker.date.weekday x 107,793 ops/sec ±4.64% (76 runs sampled)  
:+1: muenchhausen.fake.date.weekday  

:clock1: muenchhausen.fake.phone.international x 677,635 ops/sec ±3.58% (79 runs sampled)  
:clock10: faker.phone x 398,385 ops/sec ±2.38% (82 runs sampled)  
:clock1030: chance.phone x 273,247 ops/sec ±3.05% (78 runs sampled)  
:+1: muenchhausen.fake.phone.international  

:clock1: muenchhausen.fake.address.street x 11,564,485 ops/sec ±2.30% (81 runs sampled)  
:clock10: faker.address.streetName x 1,054,338 ops/sec ±2.72% (80 runs sampled)  
:clock1030: chance.street x 181,507 ops/sec ±4.28% (75 runs sampled)  
:+1: muenchhausen.fake.address.street  

:clock1: muenchhausen.fake.address.lon x 6,708,524 ops/sec ±2.82% (79 runs sampled)  
:clock10: faker.address.longitude x 1,722,227 ops/sec ±1.91% (84 runs sampled)  
:clock1030: chance.latitude x 446,648 ops/sec ±4.12% (72 runs sampled)  
:+1: muenchhausen.fake.address.lon  

:clock1: muenchhausen.fake.address.lat x 6,600,294 ops/sec ±3.23% (78 runs sampled)  
:clock10: faker.address.latitude x 1,678,179 ops/sec ±2.21% (83 runs sampled)  
:clock1030: chance.latitude x 430,695 ops/sec ±3.34% (73 runs sampled)  
:+1: muenchhausen.fake.address.lat  

:clock1: muenchhausen.fake.address.postcode x 6,588,998 ops/sec ±2.71% (77 runs sampled)  
:clock10: faker.address.zipCode x 797,192 ops/sec ±2.31% (80 runs sampled)  
:clock1030: chance.zip x 311,498 ops/sec ±2.95% (78 runs sampled)  
:+1: muenchhausen.fake.address.postcode  

:clock1: muenchhausen.fake.address.city x 6,617,412 ops/sec ±3.16% (79 runs sampled)  
:clock10: faker.address.city x 40,156 ops/sec ±4.38% (77 runs sampled)  
:clock1030: chance.city x 160,169 ops/sec ±3.50% (75 runs sampled)  
:+1: muenchhausen.fake.address.city  

