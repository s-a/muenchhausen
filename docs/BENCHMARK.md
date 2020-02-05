# Benchmarks
Tested at 05/01/2020
  
## Arena
Node.js v12.13.1 on win32 x64 v10.0.18363 with 16044470272 total memory and
AMD A10-7860K Radeon R7, 12 Compute Cores 4C+8G 0 4 cores.
  
## Gladiators
 - Muenchhausen@1.0.6
 - faker.js@4.1.0
 - Chance.js@1.1.4
  
:clock1: muenchhausen.fake.person.lastname x 39,692,546 ops/sec ±1.42% (86 runs sampled)  
:clock10: faker.name.lastName x 4,384,356 ops/sec ±1.06% (86 runs sampled)  
:clock1030: chance.last x 20,819 ops/sec ±1.04% (85 runs sampled)  
:+1: muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 2,733,839 ops/sec ±2.99% (83 runs sampled)  
:clock10: faker.name.findName x 794,459 ops/sec ±2.28% (84 runs sampled)  
:clock1030: chance.name x 288,600 ops/sec ±4.18% (80 runs sampled)  
:+1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.company.name x 620,199,697 ops/sec ±3.68% (81 runs sampled)  
:clock10: faker.company.companyName x 6,270 ops/sec ±3.46% (71 runs sampled)  
:+1: muenchhausen.fake.company.name  

:clock1: muenchhausen.fake.person.firstname x 37,678,740 ops/sec ±1.98% (84 runs sampled)  
:clock10: faker.name.firstName x 2,600,903 ops/sec ±1.32% (89 runs sampled)  
:clock1030: chance.last x 18,898 ops/sec ±3.89% (84 runs sampled)  
:+1: muenchhausen.fake.person.firstname  

:clock1: muenchhausen.fake.random.element (Object) x 673,765,718 ops/sec ±1.24% (84 runs sampled)  
:clock10: faker.random.objectElement x 3,944,984 ops/sec ±0.92% (86 runs sampled)  
:+1: muenchhausen.fake.random.element (Object)  

:clock1: muenchhausen.fake.random.element (Array) x 685,078,930 ops/sec ±0.74% (87 runs sampled)  
:clock10: faker.random.arrayElement x 5,395,208 ops/sec ±2.54% (85 runs sampled)  
:clock1030: chance.pickone x 3,516,848 ops/sec ±2.94% (84 runs sampled)  
:+1: muenchhausen.fake.random.element (Array)  

:clock1: muenchhausen.fake.boolean.random x 30,431,114 ops/sec ±4.91% (78 runs sampled)  
:clock10: faker.random.boolean x 4,737,674 ops/sec ±7.45% (74 runs sampled)  
:clock1030: chance.bool x 6,829,989 ops/sec ±6.29% (78 runs sampled)  
:+1: muenchhausen.fake.boolean.random  

:clock1: muenchhausen.fake.decimal.random x 833,049 ops/sec ±3.20% (81 runs sampled)  
:clock1030: chance.floating x 258,774 ops/sec ±1.53% (82 runs sampled)  
:+1: muenchhausen.fake.decimal.random  

:clock1: muenchhausen.fake.number.random x 4,104,165 ops/sec ±1.14% (87 runs sampled)  
:clock10: faker.random.number x 4,825,323 ops/sec ±1.47% (84 runs sampled)  
:clock1030: chance.floating({fixed: 0}) x 286,698 ops/sec ±2.47% (86 runs sampled)  
:+1: faker.random.number  

:clock1: muenchhausen.fake.date.future x 76,955 ops/sec ±1.47% (86 runs sampled)  
:clock10: faker.date.future x 14,077 ops/sec ±1.08% (84 runs sampled)  
:+1: muenchhausen.fake.date.future  

:clock1: muenchhausen.fake.date.past x 78,392 ops/sec ±1.30% (83 runs sampled)  
:clock10: faker.date.past x 13,328 ops/sec ±2.64% (81 runs sampled)  
:+1: muenchhausen.fake.date.past  

:clock1: muenchhausen.fake.date.random:   
:clock10: faker.date.future:   
:clock1030: chance.date x 141,048 ops/sec ±1.39% (85 runs sampled)  
:+1: chance.date  

:clock1: muenchhausen.fake.date.month x 14,927,357 ops/sec ±6.33% (75 runs sampled)  
:clock10: faker.date.month:   
:clock1030: chance.month x 898,378 ops/sec ±7.50% (73 runs sampled)  
:+1: muenchhausen.fake.date.month  

:clock1: muenchhausen.fake.date.weekday x 231,477 ops/sec ±4.07% (82 runs sampled)  
:clock10: faker.date.weekday x 12,718 ops/sec ±5.75% (69 runs sampled)  
:+1: muenchhausen.fake.date.weekday  

:clock1: muenchhausen.fake.phone.international x 648,853 ops/sec ±9.05% (64 runs sampled)  
:clock10: faker.phone x 258,175 ops/sec ±1.97% (82 runs sampled)  
:clock1030: chance.phone x 372,853 ops/sec ±2.73% (82 runs sampled)  
:+1: muenchhausen.fake.phone.international  

:clock1: muenchhausen.fake.address.street x 39,631,888 ops/sec ±3.89% (78 runs sampled)  
:clock10: faker.address.streetName x 392,981 ops/sec ±2.43% (85 runs sampled)  
:clock1030: chance.street x 298,222 ops/sec ±1.06% (86 runs sampled)  
:+1: muenchhausen.fake.address.street  

:clock1: muenchhausen.fake.address.lon x 15,586,962 ops/sec ±7.11% (75 runs sampled)  
:clock10: faker.address.longitude x 409,533 ops/sec ±1.73% (87 runs sampled)  
:clock1030: chance.latitude x 202,519 ops/sec ±8.42% (71 runs sampled)  
:+1: muenchhausen.fake.address.lon  

:clock1: muenchhausen.fake.address.lat x 16,210,935 ops/sec ±3.14% (78 runs sampled)  
:clock10: faker.address.latitude x 422,220 ops/sec ±3.67% (83 runs sampled)  
:clock1030: chance.latitude x 219,777 ops/sec ±6.56% (72 runs sampled)  
:+1: muenchhausen.fake.address.lat  

:clock1: muenchhausen.fake.address.postcode x 15,323,566 ops/sec ±7.48% (74 runs sampled)  
:clock10: faker.address.zipCode x 360,533 ops/sec ±7.51% (68 runs sampled)  
:clock1030: chance.zip x 536,768 ops/sec ±2.73% (83 runs sampled)  
:+1: muenchhausen.fake.address.postcode  

:clock1: muenchhausen.fake.address.city x 16,036,079 ops/sec ±1.42% (84 runs sampled)  
:clock10: faker.address.city x 3,902 ops/sec ±2.76% (74 runs sampled)  
:clock1030: chance.city x 339,538 ops/sec ±1.79% (86 runs sampled)  
:+1: muenchhausen.fake.address.city  

