# Global





* * *

### now(templateString) 

current date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md

**Parameters**

**templateString**: `String`, a template string. For example `"now:$(date.now format : { skeleton: GyMMMEdhms })"`



### random(templateString) 

random date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
min and max are in format : `yyyymmddhhssnn`

**Parameters**

**templateString**: `String`, a template string. For example `rnd:$(date.random min : 10200901, max : 20200901, format : { skeleton: GyMMMEdhms })`



### future(templateString) 

future date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
min and max are in format : `yyyymmddhhssnn`

**Parameters**

**templateString**: `String`, a template string. For example `rnd:$(date.future max : 20200901, format : { skeleton: GyMMMEdhms })`



### past(templateString) 

past date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
min and max are in format : `yyyymmddhhssnn`

**Parameters**

**templateString**: `String`, a template string. For example `rnd:$(date.past min : 198800901, format : { skeleton: GyMMMEdhms })`



### month(templateString) 

random month name based on current culture

**Parameters**

**templateString**: `String`, a template string. For example `rnd:$(date.month)`



### weekday(templateString) 

random weekday name based on current culture

**Parameters**

**templateString**: `String`, a template string. For example `rnd:$(date.month)`




* * *










