var should = require('should');
var Discharge = require('../lib/discharge.js').Discharge
	,discharge = null;

describe("Discharge Calculator", function(){
	before(function(){
		discharge = new Discharge();
	});
	after(function(){

	});
	it("check init method", function(){
		discharge.init("army","20110103");
		discharge.type.should.equal("army");
		discharge.joinDate.getFullYear().should.equal(2011);
		discharge.joinDate.getMonth().should.equal(0);
		discharge.joinDate.getDate().should.equal(3);
	});

	it("check valid joinDate", function(){
		discharge.init("army","20030303");
		discharge.isValidJoinDate().should.be.false;
		discharge.init("army","20060102");
		discharge.isValidJoinDate().should.be.false;
		discharge.init("army","20151010");
		discharge.isValidJoinDate().should.be.false;
		discharge.init("army","20150809");
		discharge.isValidJoinDate().should.be.true;
		discharge.init("army","20060103");
		discharge.isValidJoinDate().should.be.true;
		discharge.init("army","20070707");
		discharge.isValidJoinDate().should.be.true;
		discharge.init("army","20130809");
		discharge.isValidJoinDate().should.be.true;
	});

	it("check regulated date", function(){
		discharge.init("army","20110202");
		discharge.isRegulatedDate().should.be.false;
		discharge.init("army","20100202");
		discharge.isRegulatedDate().should.be.false;
		discharge.init("army","20110227");
		discharge.isRegulatedDate().should.be.true;
		discharge.init("army","20120602");
		discharge.isRegulatedDate().should.be.true;
	});

	it("check discharge Date", function(){
		/*army*/
		discharge.init("army","20110227");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(26);
		
		discharge.init("army","20110401");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(31);
		
		discharge.init("army","20130301");
		discharge.dischargeDate.getFullYear().should.equal(2014);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(30);
		
		discharge.init("army","20060103");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(1);

		discharge.init("army","20060121");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);

		discharge.init("army","20060122");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);
		
		discharge.init("army","20060211");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(1);
		discharge.dischargeDate.getDate().should.equal(8);
		
		discharge.init("army","20060212");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(1);
		discharge.dischargeDate.getDate().should.equal(8);
	
		discharge.init("army","20070503");
		discharge.dischargeDate.getFullYear().should.equal(2009);
		discharge.dischargeDate.getMonth().should.equal(3);
		discharge.dischargeDate.getDate().should.equal(8);
	
		discharge.init("army","20091111");
		discharge.dischargeDate.getFullYear().should.equal(2011);
		discharge.dischargeDate.getMonth().should.equal(8);
		discharge.dischargeDate.getDate().should.equal(3);
	
		discharge.init("army","20110102");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(9);
		discharge.dischargeDate.getDate().should.equal(5);
	
		discharge.init("army","20110115");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(9);
		discharge.dischargeDate.getDate().should.equal(18);
	
		discharge.init("army","20110116");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(9);
		discharge.dischargeDate.getDate().should.equal(18);
	
		discharge.init("army","20110213");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(13);
	
		discharge.init("army","20110226");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(26);
	
		/*airforce*/
		discharge.init("airforce","20051003");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(1);
	
		discharge.init("airforce","20051021");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);
	
		discharge.init("airforce","20051022");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);
	
		discharge.init("airforce","20071021");
		discharge.dischargeDate.getFullYear().should.equal(2009);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(15);
		
		discharge.init("airforce","20101224");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(22);
	
		discharge.init("airforce","20101225");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(22);

		/*navi*/
		discharge.init("navi","20051103");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(1);
	
		discharge.init("navi","20051121");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);
	
		discharge.init("navi","20051122");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(19);
	
		discharge.init("navi","20071021");
		discharge.dischargeDate.getFullYear().should.equal(2009);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(15);
		
		discharge.init("navi","20101213");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(15);
	
		discharge.init("navi","20101214");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(15);

		/*public*/
		discharge.init("public","20051103");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(1);
	
		discharge.init("public","20051129");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(27);
	
		discharge.init("public","20051130");
		discharge.dischargeDate.getFullYear().should.equal(2008);
		discharge.dischargeDate.getMonth().should.equal(0);
		discharge.dischargeDate.getDate().should.equal(27);
	
		discharge.init("public","20071021");
		discharge.dischargeDate.getFullYear().should.equal(2009);
		discharge.dischargeDate.getMonth().should.equal(10);
		discharge.dischargeDate.getDate().should.equal(24);
		
		discharge.init("public","20101221");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(15);
	
		discharge.init("public","20101222");
		discharge.dischargeDate.getFullYear().should.equal(2012);
		discharge.dischargeDate.getMonth().should.equal(11);
		discharge.dischargeDate.getDate().should.equal(15);

	});

	it("check other info (service ratio)",function(){
		discharge.init("army","20060103");
		discharge.goneDay.should.equal(728);
		discharge.remainDay.should.equal(0);

		discharge.init("army","20070707");
		discharge.goneDay.should.equal(703);
		discharge.remainDay.should.equal(0);

		discharge.init("army","20110103");
		discharge.goneDay.should.equal(642);
		discharge.remainDay.should.equal(0);

		discharge.init("army","20120202");
		discharge.goneDay.should.equal(566);
		discharge.remainDay.should.equal(72);

		discharge.init("army","20130202");
		discharge.goneDay.should.equal(200);
		discharge.remainDay.should.equal(437);

		discharge.init("army","20130909");
		discharge.goneDay.should.equal(0);
		discharge.remainDay.should.equal(637);

	});

	it("check other info (caste)",function(){
		discharge.init("army","20130803");
		discharge.caste.should.equal(0);

		discharge.init("army","20130703");
		discharge.caste.should.equal(0);

		discharge.init("army","20130603");
		discharge.caste.should.equal(0);

		discharge.init("army","20130523");
		discharge.caste.should.equal(1);

		discharge.init("army","20121123");
		discharge.caste.should.equal(1);

		discharge.init("army","20121023");
		discharge.caste.should.equal(2);

		discharge.init("army","20120423");
		discharge.caste.should.equal(2);

		discharge.init("army","20120323");
		discharge.caste.should.equal(3);

		discharge.init("army","20070505");
		discharge.caste.should.equal(3);
	});

	it("check other info (promotion)",function(){
		console.log("=====");
	
		discharge.init("army","20130803");
		discharge.promotionDay.should.equal(72);

		discharge.init("army","20130703");
		discharge.promotionDay.should.equal(41);

		discharge.init("army","20130603");
		discharge.promotionDay.should.equal(11);

		discharge.init("army","20130523");
		discharge.promotionDay.should.equal(192);

		discharge.init("army","20121123");
		discharge.promotionDay.should.equal(11);

		discharge.init("army","20121023");
		discharge.promotionDay.should.equal(192);

		discharge.init("army","20120423");
		discharge.promotionDay.should.equal(11);

		discharge.init("army","20120323");
		discharge.promotionDay.should.equal(0);

		discharge.init("army","20070505");
		discharge.promotionDay.should.equal(0);
	
	});

});

