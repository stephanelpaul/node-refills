var expect = require('chai').expect
	, sass = require('node-sass')
	, refills = require('../').includePaths
	, fs = require('fs');


describe('node-refills', function(){
	it('should compile to css when importing Bourbon, Neat and Refills', function() {
		var generatedCss = sass.renderSync({
			file: __dirname + '/fixtures/features.scss',
			includePaths: refills,
			outputStyle: 'expanded'
		});

		var expectedCssFile = __dirname + '/expectations/compile.css';
		var expectedCss = fs.readFileSync(expectedCssFile, {encoding: 'utf-8'});
		expect(generatedCss).to.eq(expectedCss);
	});

	xit('should not throw errors for Bourbon features', function(done) {
		sass.render({
			file: __dirname + '/fixtures/features.scss',
			includePaths: refills,
			error: function(err) {
				throw new Error(err);
			},
			success: function(css) {
				done();
			}
		});
	});
});