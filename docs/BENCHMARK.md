# Benchmarks
Tested at 01/03/2017
  
## Arena
Node.js v7.7.4 on win32 x64 v10.0.10586 with 12776148992 total memory and
Intel® Core™ i5-6200U 2.3 4 cores.
  
## Gladiators
 - Muenchhausen@0.0.8
 - faker.js@4.1.0
 - Chance.js@1.0.6
  
:clock1: muenchhausen.fake.person.lastname x 20,413,560 ops/sec ±0.66% (87 runs sampled)  
:clock10: faker.name.lastName x 3,518,049 ops/sec ±0.64% (87 runs sampled)  
:clock1030: chance.last x 984,067 ops/sec ±1.35% (87 runs sampled)  
:+1: muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname x 1,995,353 ops/sec ±0.81% (89 runs sampled)  
:clock10: faker.name.findName x 963,399 ops/sec ±1.04% (91 runs sampled)  
:clock1030: chance.name x 280,567 ops/sec ±0.97% (93 runs sampled)  
:+1: muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname  

:clock1: muenchhausen.fake.company.name x 27,074,618 ops/sec ±0.68% (89 runs sampled)  
:clock10: faker.company.companyName x 58,019 ops/sec ±2.36% (88 runs sampled)  
:+1: muenchhausen.fake.company.name  

:clock1: muenchhausen.fake.person.firstname x 19,428,693 ops/sec ±1.53% (88 runs sampled)  
:clock10: faker.name.firstName x 2,710,511 ops/sec ±1.92% (90 runs sampled)  
:clock1030: chance.last x 1,013,678 ops/sec ±1.81% (93 runs sampled)  
:+1: muenchhausen.fake.person.firstname  

:clock1: muenchhausen.fake.random.element (Object) x 21,703,624 ops/sec ±0.50% (91 runs sampled)  
:clock10: faker.random.objectElement x 2,950,342 ops/sec ±1.35% (91 runs sampled)  
:+1: muenchhausen.fake.random.element (Object)  

:clock1: muenchhausen.fake.random.element (Array) x 21,383,936 ops/sec ±1.32% (86 runs sampled)  
:clock10: faker.random.arrayElement x 6,487,682 ops/sec ±1.16% (88 runs sampled)  
:clock1030: chance.pickone x 1,834,421 ops/sec ±0.52% (88 runs sampled)  
:+1: muenchhausen.fake.random.element (Array)  

:clock1: muenchhausen.fake.boolean.random x 29,351,083 ops/sec ±1.21% (93 runs sampled)  
:clock10: faker.random.boolean x 7,049,645 ops/sec ±1.52% (88 runs sampled)  
:clock1030: chance.bool x 2,500,219 ops/sec ±0.62% (94 runs sampled)  
:+1: muenchhausen.fake.boolean.random  

:clock1: muenchhausen.fake.decimal.random x 1,155,247 ops/sec ±2.93% (86 runs sampled)  
:clock1030: chance.floating x 455,222 ops/sec ±2.03% (87 runs sampled)  
:+1: muenchhausen.fake.decimal.random  

:clock1: muenchhausen.fake.number.random x 16,855,663 ops/sec ±0.58% (90 runs sampled)  
:clock10: faker.random.number x 7,457,006 ops/sec ±0.68% (89 runs sampled)  
:clock1030: chance.floating({fixed: 0}) x 476,143 ops/sec ±1.94% (90 runs sampled)  
:+1: muenchhausen.fake.number.random  

:clock1: muenchhausen.fake.date.future x 124,310 ops/sec ±0.61% (91 runs sampled)  
:clock10: faker.date.future x 84,120 ops/sec ±2.43% (89 runs sampled)  
:+1: muenchhausen.fake.date.future  

:clock1: muenchhausen.fake.date.past x 122,446 ops/sec ±0.67% (89 runs sampled)  
:clock10: faker.date.past x 86,178 ops/sec ±2.83% (90 runs sampled)  
:+1: muenchhausen.fake.date.past  

:clock1: muenchhausen.fake.date.random:   
:clock10: faker.date.future:   
:clock1030: chance.date x 114,629 ops/sec ±0.49% (90 runs sampled)  
:+1: chance.date  

:clock1: muenchhausen.fake.date.month x 21,723,874 ops/sec ±1.69% (91 runs sampled)  
:clock10: faker.date.month:   
:clock1030: chance.month x 755,588 ops/sec ±2.14% (91 runs sampled)  
:+1: muenchhausen.fake.date.month  

:clock1: muenchhausen.fake.date.weekday x 388,899 ops/sec ±0.54% (90 runs sampled)  
:clock10: faker.date.weekday x 125,061 ops/sec ±3.09% (89 runs sampled)  
:+1: muenchhausen.fake.date.weekday  

:clock1: muenchhausen.fake.phone.international x 802,422 ops/sec ±2.61% (88 runs sampled)  
:clock10: faker.phone x 484,214 ops/sec ±0.53% (93 runs sampled)  
:clock1030: chance.phone x 241,788 ops/sec ±0.82% (91 runs sampled)  
:+1: muenchhausen.fake.phone.international  

:clock1: muenchhausen.fake.address.street x 15,628,296 ops/sec ±0.71% (90 runs sampled)  
:clock10: faker.address.streetName x 1,105,665 ops/sec ±1.10% (92 runs sampled)  
:clock1030: chance.street x 174,026 ops/sec ±1.67% (93 runs sampled)  
:+1: muenchhausen.fake.address.street  

:clock1: muenchhausen.fake.address.lon x 9,219,743 ops/sec ±0.69% (91 runs sampled)  
:clock10: faker.address.longitude x 1,894,111 ops/sec ±1.36% (90 runs sampled)  
:clock1030: chance.latitude x 422,615 ops/sec ±2.75% (80 runs sampled)  
:+1: muenchhausen.fake.address.lon  

:clock1: muenchhausen.fake.address.lat x 9,051,195 ops/sec ±0.96% (91 runs sampled)  
:clock10: faker.address.latitude x 2,009,639 ops/sec ±0.46% (90 runs sampled)  
:clock1030: chance.latitude x 457,011 ops/sec ±1.53% (90 runs sampled)  
:+1: muenchhausen.fake.address.lat  

:clock1: muenchhausen.fake.address.postcode x 8,974,814 ops/sec ±0.53% (93 runs sampled)  
:clock10: faker.address.zipCode x 990,506 ops/sec ±0.46% (91 runs sampled)  
:clock1030: chance.zip x 158,249 ops/sec ±8.35% (63 runs sampled)  
:+1: muenchhausen.fake.address.postcode  

:clock1: muenchhausen.fake.address.city x 2,325,712 ops/sec ±14.07% (39 runs sampled)  
:clock10: faker.address.city x 10,492 ops/sec ±7.29% (58 runs sampled)  
:clock1030: chance.city x 41,057 ops/sec ±6.05% (58 runs sampled)  
:+1: muenchhausen.fake.address.city  

