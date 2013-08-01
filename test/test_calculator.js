var should = require('should');
var Calculator = require('../lib/calculator.js').Calculator
	,calculator = null;


describe("Special day calculator", function(){
	before(function(){
		calculator = new Calculator("2013","7","29");
	});

	after(function(){

	});
	
	it("valid check test", function(){
		calculator.isValidDate("20131212").should.be.true;
		calculator.isValidDate("201312").should.be.false;
		calculator.isValidDate("201312122").should.be.false;
		calculator.isValidDate("helloworld").should.be.false;
	});
	it("hyphen test",function(){
		calculator.stripHyphen("2013-03-02").should.equal("20130302");

		calculator.putHyphen("20130102").should.equal("2013-01-02");
	});
	it("set, get test",function(){
		calculator.setDate("2013","8","1");
		calculator.getDate().getFullYear().should.equal(2013);
		calculator.getDate().getMonth().should.equal(7);
		calculator.getDate().getDate().should.equal(1);
		
		calculator.getTermsBetweenTwoDate("20130810").should.equal(9);
	});

	it("get Date By terms test",function(){
		calculator.setDate("2014","2","14");
		calculator.getDateByTerms(10).getDate().should.equal(24);
	});
	it("get Date By Dday test",function(){
		calculator.setDate("2013","5","20");
		calculator.getDateByDday(5).getDate().should.equal(15);
	});
	it("get Korean Age test",function(){
		calculator.setDate("2013","8","1");
		calculator.getKoreanAge("19840609").should.equal(29);
		calculator.getKoreanAge("19840802").should.equal(28);
	});
	it("check terms from birth",function(){
		calculator.setDate("2013","8","1");
		calculator.getTermsFromBirth("20130731").should.equal(1);
	});

});
