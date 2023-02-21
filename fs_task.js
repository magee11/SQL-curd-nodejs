

var fs = require('fs');

fs.appendFileSync('test.json','Changes',function(err){
    if(err) throw err;
    console.log("Changes Saved")
});


var fs = require('fs');

fs.open('test.js', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

var fs = require('fs');

fs.writeFile('test.js', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

var fs = require('fs');

var fs = require('fs');

fs.unlink('test.js', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});