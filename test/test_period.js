var should = require('should');
var Period = require('../lib/period.js').Period
	,period = null;

describe("Period cycle Calculator", function(){
	before(function(){
		period = new Period();
	});
	after(function(){

	});
	it("check startDate",function(){
		period.setStartDate("20130801");
		period.thisPeriodDate.getFullYear().should.equal(2013);
		period.thisPeriodDate.getMonth().should.equal(7);
		period.thisPeriodDate.getDate().should.equal(1);

	});
	it("Period cycle setting check",function(){
		period.setPeriodCycle(30);
		period.periodCycle.should.equal(30);
		period.nextPeriodDate.getDate().should.equal(31);
		period.ovulationDay.getDate().should.equal(17);
		period.startPregnancy.getDate().should.equal(13);
		period.endPregnancy.getDate().should.equal(20);

		period.setPeriodCycle("29");
		period.periodCycle.should.equal(29);
		period.nextPeriodDate.getDate().should.equal(30);
		period.ovulationDay.getDate().should.equal(16);
		period.startPregnancy.getDate().should.equal(12);
		period.endPregnancy.getDate().should.equal(19);

		period.setPeriodCycleByBeforeDate("20130704");
		period.periodCycle.should.equal(28);
		period.nextPeriodDate.getDate().should.equal(29);
		period.ovulationDay.getDate().should.equal(15);
		period.startPregnancy.getDate().should.equal(11);
		period.endPregnancy.getDate().should.equal(18);
	});
	it("period info check",function(){
		period.setStartDate("20130801");
		period.setPeriodCycle(30);

		var info = period.getPeriodInfo();
		info.cycle.should.equal(30);
		info.nextDate.getDate().should.equal(31);
		info.ovulationDay.getDate().should.equal(17);
		info.startPregnancy.getDate().should.equal(13);
		info.endPregnancy.getDate().should.equal(20);

	});
});

