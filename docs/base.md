# Global





* * *

### FakeExtension() 

The base FakeExtension. Useful to write your own extensions.  
*example:*  
```javascript 
function Currency(context) {
   Currency.super_.apply(this, arguments);
   return this; 
}
require("./../../extension/").extend(Currency);
```




* * *










