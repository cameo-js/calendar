var should = require('should');
var Lunar = require('../lib/lunar.js').Lunar
	,lunar = null;


describe("transformation test between lunar and solor calendar", function(){
	before(function(){
		lunar = new Lunar();
	});
	after(function(){

	});
	
	it("solar to lunar test", function(){
		should.exist(Lunar);
		should.exist(lunar);
		lunar.should.be.an.instanceOf(Lunar);
		lunar.solMonthDay.length.should.equal(12);
	});
	it("lunar to solar test", function(){
		should.exist(lunar);
	});
});	


