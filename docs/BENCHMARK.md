# Benchmarks
Tested at 31/00/2020
  
## Arena
Node.js v10.13.0 on win32 x64 v10.0.18362 with 17044848640 total memory and
Intel® Core™ i7-7700 3.6 8 cores.
  
## Gladiators
 - Muenchhausen@1.0.4
 - faker.js@4.1.0
 - Chance.js@1.0.6
  
:clock1: muenchhausen.fake.person.lastname x 31,993,336 ops/sec ±0.89% (87 runs sampled)  
:clock10: faker.name.lastName x 10,589,049 ops/sec ±0.22% (95 runs sampled)  
:clock1030: chance.last x 3,512,378 ops/sec ±0.20% (96 runs sampled)  
:+1: muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 6,899,669 ops/sec ±1.39% (92 runs sampled)  
:clock10: faker.name.findName x 2,068,071 ops/sec ±0.46% (95 runs sampled)  
:clock1030: chance.name x 800,385 ops/sec ±1.08% (94 runs sampled)  
:+1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.company.name x 638,958,050 ops/sec ±0.34% (92 runs sampled)  
:clock10: faker.company.companyName x 51,522 ops/sec ±1.22% (85 runs sampled)  
:+1: muenchhausen.fake.company.name  

:clock1: muenchhausen.fake.person.firstname x 31,865,882 ops/sec ±1.46% (87 runs sampled)  
:clock10: faker.name.firstName x 5,920,166 ops/sec ±0.44% (93 runs sampled)  
:clock1030: chance.last x 3,153,792 ops/sec ±1.21% (93 runs sampled)  
:+1: muenchhausen.fake.person.firstname  

:clock1: muenchhausen.fake.random.element (Object) x 646,409,940 ops/sec ±0.13% (96 runs sampled)  
:clock10: faker.random.objectElement x 11,930,018 ops/sec ±0.36% (95 runs sampled)  
:+1: muenchhausen.fake.random.element (Object)  

:clock1: muenchhausen.fake.random.element (Array) x 638,924,026 ops/sec ±0.36% (94 runs sampled)  
:clock10: faker.random.arrayElement x 19,788,362 ops/sec ±0.15% (96 runs sampled)  
:clock1030: chance.pickone x 8,217,008 ops/sec ±0.74% (95 runs sampled)  
:+1: muenchhausen.fake.random.element (Array)  

:clock1: muenchhausen.fake.boolean.random x 63,766,096 ops/sec ±0.49% (97 runs sampled)  
:clock10: faker.random.boolean x 19,110,573 ops/sec ±1.05% (91 runs sampled)  
:clock1030: chance.bool x 13,551,929 ops/sec ±0.90% (95 runs sampled)  
:+1: muenchhausen.fake.boolean.random  

:clock1: muenchhausen.fake.decimal.random x 1,732,554 ops/sec ±3.15% (82 runs sampled)  
:clock1030: chance.floating x 808,209 ops/sec ±1.99% (88 runs sampled)  
:+1: muenchhausen.fake.decimal.random  

:clock1: muenchhausen.fake.number.random x 7,103,581 ops/sec ±0.55% (94 runs sampled)  
:clock10: faker.random.number x 15,152,710 ops/sec ±0.28% (95 runs sampled)  
:clock1030: chance.floating({fixed: 0}) x 872,084 ops/sec ±1.13% (95 runs sampled)  
:+1: faker.random.number  

:clock1: muenchhausen.fake.date.future x 199,736 ops/sec ±0.98% (94 runs sampled)  
:clock10: faker.date.future x 92,856 ops/sec ±2.34% (86 runs sampled)  
:+1: muenchhausen.fake.date.future  

:clock1: muenchhausen.fake.date.past x 202,752 ops/sec ±0.71% (95 runs sampled)  
:clock10: faker.date.past x 95,682 ops/sec ±1.56% (92 runs sampled)  
:+1: muenchhausen.fake.date.past  

:clock1: muenchhausen.fake.date.random:   
:clock10: faker.date.future:   
:clock1030: chance.date x 349,177 ops/sec ±1.01% (93 runs sampled)  
:+1: chance.date  

:clock1: muenchhausen.fake.date.month x 49,737,993 ops/sec ±0.28% (96 runs sampled)  
:clock10: faker.date.month:   
:clock1030: chance.month x 2,775,856 ops/sec ±1.44% (93 runs sampled)  
:+1: muenchhausen.fake.date.month  

:clock1: muenchhausen.fake.date.weekday x 611,205 ops/sec ±1.53% (93 runs sampled)  
:clock10: faker.date.weekday x 130,040 ops/sec ±1.25% (91 runs sampled)  
:+1: muenchhausen.fake.date.weekday  

:clock1: muenchhausen.fake.phone.international x 1,860,695 ops/sec ±1.29% (91 runs sampled)  
:clock10: faker.phone x 648,389 ops/sec ±0.48% (93 runs sampled)  
:clock1030: chance.phone x 789,094 ops/sec ±2.02% (89 runs sampled)  
:+1: muenchhausen.fake.phone.international  

:clock1: muenchhausen.fake.address.street x 137,603,150 ops/sec ±2.82% (86 runs sampled)  
:clock10: faker.address.streetName x 1,748,967 ops/sec ±0.31% (94 runs sampled)  
:clock1030: chance.street x 543,276 ops/sec ±0.98% (88 runs sampled)  
:+1: muenchhausen.fake.address.street  

:clock1: muenchhausen.fake.address.lon x 46,483,012 ops/sec ±2.14% (88 runs sampled)  
:clock10: faker.address.longitude x 2,757,453 ops/sec ±1.21% (90 runs sampled)  
:clock1030: chance.latitude x 748,352 ops/sec ±1.93% (89 runs sampled)  
:+1: muenchhausen.fake.address.lon  

:clock1: muenchhausen.fake.address.lat x 52,721,261 ops/sec ±1.01% (88 runs sampled)  
:clock10: faker.address.latitude x 2,968,344 ops/sec ±0.65% (95 runs sampled)  
:clock1030: chance.latitude x 782,971 ops/sec ±1.00% (94 runs sampled)  
:+1: muenchhausen.fake.address.lat  

:clock1: muenchhausen.fake.address.postcode x 56,074,715 ops/sec ±0.47% (95 runs sampled)  
:clock10: faker.address.zipCode x 1,220,710 ops/sec ±1.40% (96 runs sampled)  
:clock1030: chance.zip x 1,046,310 ops/sec ±1.29% (91 runs sampled)  
:+1: muenchhausen.fake.address.postcode  

:clock1: muenchhausen.fake.address.city x 54,236,047 ops/sec ±0.42% (92 runs sampled)  
:clock10: faker.address.city x 33,309 ops/sec ±2.73% (71 runs sampled)  
:clock1030: chance.city x 524,187 ops/sec ±0.47% (97 runs sampled)  
:+1: muenchhausen.fake.address.city  

