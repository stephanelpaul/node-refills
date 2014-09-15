var path = require('path');

var includePaths = function() {
	var neatPaths = require('node-neat').includePaths;
	var refillsPaths = path.join(__dirname,'assets/stylesheets');
	return neatPaths.concat(refillsPaths);
};

module.exports = {
	includePaths: includePaths()
};