# Global





* * *

### extend(subClass) 

Extends your custom extension with the base FakeExtension. Useful to write your own extensions.  
*example:*  
```javascript 
function Currency(context, options) {
   Currency.super_.apply(this, arguments);
   return this; 
}
require("./../../extension/").extend(Currency);
```

**Parameters**

**subClass**: `Object`, Your custom extension Object"`




* * *










