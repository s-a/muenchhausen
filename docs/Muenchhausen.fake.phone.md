# Muenchhausen.fake.phone





* * *

### international(templateString) 

returns a random phone in INTERNATIONAL format. The example shows a swiss number format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22.

**Parameters**

**templateString**: `String`, a template string. For example `"phone.international:$(phone.international country:CH)"`



### national(templateString) 

returns a random phone in NATIONAL format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22.

**Parameters**

**templateString**: `String`, a template string. For example `"phone.national:$(phone.national)"`



### e164(templateString) 

returns a random phone in E164 format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22.

**Parameters**

**templateString**: `String`, a template string. For example `"phone.E164:$(phone.E164)"`




* * *










