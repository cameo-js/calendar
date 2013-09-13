var should = require('should');
var Calendar = require('../lib/calendar.js').Calendar
	,calendar = null;


describe("calendar drawing tool", function(){
	before(function(){
		calendar = new Calendar("2013","8","9");
	});
	after(function(){

	});

	it("check default date",function(){
		calendar.year.should.equal(2013);
		calendar.month.should.equal(7);
		calendar.day.should.equal(9);
	});

	it("check Date Array",function(){
		

	});
});
