# bullhead
a package to add thousand-bit separator for a number value.


## Examples

```javascript
var bh = require('bullhead');

console.log(bh(12000)); 			// 12,000
console.log(bh(12000, 2)); 			// 12,000.00
console.log(bh(12000, 2, '$'));		// $12,000.00
console.log(bh(12000.332, 2, '$'));	// $12,000.33
```


