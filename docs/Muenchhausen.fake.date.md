# Global





* * *

### now() 

current date formated based on current culture. A custom format is optional possible.
JavaScript example: .now({"format" : "yyyy-MM-ddThh:mm:ss"})
Template example: `"now:$(date.now format:'yyyy-MM-ddThh:mm:ss')"`



### random() 

random date formated based on current culture. A custom format as well as min and max dates are optional possible.
JavaScript example: .random({"min" : "19080901", "max" : "23450901"})
Template example: `"random:$(date.random min:19080901, max:23450901)"`



### future() 

random date in future formated based on current culture. A custom format as well as min and max dates are optional possible.
JavaScript example: .future()
Template example: `"future:$(date.future max:23450901)"`



### past() 

random date from past formated based on current culture. A custom format as well as min and max dates are optional possible.
JavaScript example: .past()
Template example: `"past:$(date.past min:19080901)"`



### month() 

random month name based on current culture 
Template example: `rnd:$(date.month)`



### weekday() 

random weekday name based on current culture 
Template example: `rnd:$(date.weekday)`




* * *










