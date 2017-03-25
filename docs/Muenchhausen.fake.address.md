# Muenchhausen.fake.address





* * *

### random() 

Returns an empty string but inititates a new random address element.
JavaScript example: address.random()  
Template example:
```bash
$ mh "$(address.random)$(address.street)"
BEVERIDGE PL SW
```



### lon() 

Returns an lon value as string from current address.
JavaScript example: address.lon()  
Template example:
```bash
$ mh "$(address.lon)"
-122.3843085
```



### lat() 

Returns an lat value as string from current address.
JavaScript example: address.lat()  
Template example:
```bash
$ mh "$(address.lat)"
47.6854272
```



### street() 

Returns street name from current address.
JavaScript example: address.street()  
Template example:
```bash
$ mh "$(address.street)"
BONAIR DR SW
```



### city() 

Returns a city name from current address.
JavaScript example: address.ctiy()  
Template example:
```bash
$ mh "$(address.ctiy)"
Bernhard-Rösler-Straße
```



### district() 

Returns a district name from current address.
JavaScript example: address.district()  
Template example:
```bash
$ mh "$(address.district)"
Grefrath
```



### postcode() 

Returns a postcode aka zipcode from current address.
JavaScript example: address.postcode()  
Template example:
```bash
$ mh "$(address.postcode)"
47929
```



### number() 

Returns a housenumber from current address.
JavaScript example: address.number()  
Template example:
```bash
$ mh "$(address.number)"
35
```




* * *










