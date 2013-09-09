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
		
		var result = lunar.solarToLunar(2001,1,1);
		result.year.should.equal(2000);
		result.month.should.equal(12);
		result.day.should.equal(7);
			
		result = lunar.solarToLunar(2002,3,3);
		result.year.should.equal(2002);
		result.month.should.equal(1);
		result.day.should.equal(20);

		result = lunar.solarToLunar(2004,7,7);
		result.year.should.equal(2004);
		result.month.should.equal(5);
		result.day.should.equal(20);
	
		result = lunar.solarToLunar(2013,7,7);
		result.year.should.equal(2013);
		result.month.should.equal(5);
		result.day.should.equal(29);
	
		result = lunar.solarToLunar(1984,6,9);
		result.year.should.equal(1984);
		result.month.should.equal(5);
		result.day.should.equal(10);

	});
	it("lunar to solar test", function(){
		var result = lunar.lunarToSolar(1984,5,10,0);
		result.year.should.equal(1984);
		result.month.should.equal(6);
		result.day.should.equal(9);
			
		result = lunar.lunarToSolar(2002,3,3,0);
		result.year.should.equal(2002);
		result.month.should.equal(4);
		result.day.should.equal(15);

		result = lunar.lunarToSolar(2004,7,7,0);
		result.year.should.equal(2004);
		result.month.should.equal(8);
		result.day.should.equal(22);
		
		result = lunar.lunarToSolar(2013,7,7,0);
		result.year.should.equal(2013);
		result.month.should.equal(8);
		result.day.should.equal(13);

		result = lunar.lunarToSolar(2012,3,3,1);
		result.year.should.equal(2012);
		result.month.should.equal(4);
		result.day.should.equal(23);
	});
});	


