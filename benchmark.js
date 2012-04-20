
var qs = require('./');

var times = 100000
  , start = new Date
  , n = times;

console.log('times: %d', times);

while (n--) qs.parse('foo=bar');
console.log('simple: %dms', new Date - start);

var start = new Date
  , n = times;

while (n--) qs.parse('user[900]=tj&user[0]=holowaychuk');
console.log('integer keys: %dms', new Date - start);

var start = new Date
  , n = times;

while (n--) qs.parse('user[name][first]=tj&user[name][last]=holowaychuk');
console.log('nested: %dms', new Date - start);

var start = new Date
  , n = times;

while (n--) qs.parse('user[999][999]=tj&user[0][0]=holowaychuk');
console.log('nested integer keys: %dms', new Date - start);


var start = new Date
  , n = times;

while (n--) qs.parse('user[164942370194702]=tj&user[344942370194702]=holowaychuk');
console.log('large numeric keys: %dms', new Date - start);