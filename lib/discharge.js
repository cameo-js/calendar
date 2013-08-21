exports.Discharge = Discharge;

function Discharge(){
	
}

Discharge.prototype = {
	minDate : 19000101,
	maxDate : 20601231,
	aDay : 1000*60*60*24,
	goneDay : 0,
	remainDay : 0,
	caste : 3,
	promotionDay : 0,
	type : null,
	typeList : ["army","airforce","navi","marine","public"],
	monthOfService : {//month
		"army" : 21,
		"airforce" : 24,
		"navi" : 23,
		"marine" : 21,
		"public" : 24
	},
	monthOfServiceOrigin : {//month
		"army" : 24,
		"airforce" : 27,
		"navi" : 26,
		"marine" : 24,
		"public" : 26
	},
	casteList : {
		"army" : [3,7,7,4],
		"airforce" : [3,7,7,7],
		"navi" : [3,7,7,6],
		"marine" : [3,7,7,4],
		"public" : [3,7,7,4]
	},
	decreaseTerms : {//day
		"army" : {
			"20060103" : 19,
			"20060122" : 21,
			"20110102" : 14,
			"20110227" : 0
		},
		"airforce" : {
			"20051003" : 19,
			"20051022" : 21,
			"20101225" : 6,
			"20110101" : 0
		},
		"navi" : {
			"20051103" : 19,
			"20051122" : 21,
			"20101214" : 20,
			"20110103" : 0
		},
		"marine" : {
			"20060103" : 19,
			"20060122" : 21,
			"20110102" : 14,
			"20110227" : 0
		},
		"public" : {
			"20051103" : 27,
			"20051130" : 28,
			"20101222" : 9,
			"20110101" : 0
		}
	},
	joinDate : null,
	dischargeDate : null,
	/**
	* 군종과 입대일을 입력하여 전역일을 계산
	*
	* @param String 군종
	* @param String 입대날짜
	* @returns {void}
	* @author J-Water(2013.08.08)
	* @example discharge.init("army","20130714")
	*/
	init : function( type, joinDate ){
		this.type = type;
		this.joinDate = this.getDateObject( joinDate );
		this.setDischargeDate();
		this.setOtherInfo();
	},
	setDischargeDate : function(){
		if( this.isValidJoinDate() ){
			var dischargeDate = new Date(this.joinDate);
			if ( this.isRegulatedDate() ) {
				dischargeDate.setMonth( dischargeDate.getMonth() + this.monthOfService[this.type] );
				dischargeDate.setDate( dischargeDate.getDate() - 1 );

			} else {
				var keys = [];
				var terms = this.decreaseTerms[this.type];
				var reductionDays = 0;
				for ( var k in terms ) {
					keys.push(k);
				}
				for ( var i = 0; i < keys.length; i++ ) {
					if ( this.joinDate >= this.getDateObject(keys[i]) ) {
						if ( keys[i+1] != null && this.joinDate >= this.getDateObject(keys[i+1]) ) {
							reductionDays = reductionDays + Math.floor( ( this.getDateObject( keys[i+1] ) - this.getDateObject( keys[i] ).getTime() ) / this.aDay / terms[keys[i]] ); 
						} else {
							reductionDays = reductionDays + 1 + Math.floor( ( this.joinDate.getTime() - this.getDateObject( keys[i] ).getTime() ) / this.aDay / terms[keys[i]] ); 
						}
					} else {
						break;
					}
				}
				dischargeDate.setMonth( dischargeDate.getMonth() + this.monthOfServiceOrigin[this.type] );
				dischargeDate.setDate( dischargeDate.getDate() - 1 - reductionDays );

			}
			this.dischargeDate = dischargeDate;
		}
	},
	setOtherInfo : function(){
		this.setServiceRatio();
		this.setCaste();
		this.setPromotionDay();
	},
	setServiceRatio : function(){
		var today = new Date();
		this.goneDay = 0;
		this.remainDay = 0;
		if ( today >= this.dischargeDate ) {
			this.goneDay = ( this.dischargeDate.getTime() - this.joinDate.getTime() ) / this.aDay;
		} else if ( today <= this.joinDate ) {
			this.remainDay = ( this.dischargeDate - this.joinDate ) / this.aDay;
		} else {
			this.goneDay = Math.floor( ( today - this.joinDate ) / this.aDay );
			this.remainDay = Math.ceil( ( this.dischargeDate - today ) / this.aDay );
		}
	},
	setCaste : function(){
		var joinDate = new Date(this.joinDate);
		var today = new Date();
		today = new Date(today.getFullYear(), today.getMonth()+1, 1);

		if ( today < this.dischargeDate ) {
			this.caste = 0;
			for ( var i = 0 ; i < this.casteList[this.type].length ; i++ ) {
				joinDate.setMonth( joinDate.getMonth() + this.casteList[this.type][i] );
				if ( joinDate > today ) {
					break;
				 } else {
					this.caste = i + 1;
				 }
			}
		} else {
			this.caste = 3;
		}
	},
	setPromotionDay : function(){
		var today = new Date();
		var promotionDay = 0;
		var month = 0;
		if ( this.caste != 3 ) {
			for ( var i = 0 ; i <= this.caste ; i++ ) {
				month = month + this.casteList[this.type][i];
			}
	
			var promotionDate = new Date( this.joinDate );
			promotionDate.setMonth( promotionDate.getMonth() + month );
			promotionDate.setDate(1);
		
			promotionDay = Math.ceil(( promotionDate.getTime() - today.getTime() ) / this.aDay);
		}
		this.promotionDay = promotionDay;
	},
	isRegulatedDate : function(){
		var flagDate = "";
		
		for( var k in this.decreaseTerms[this.type] ) { if( this.decreaseTerms[this.type][k] == 0 ) { flagDate = k; break; } }
		
		if ( this.getDateObject(flagDate) <= this.joinDate ) {
			return true;
		} else {
			return false;
		}
	},
	isValidJoinDate : function(){
		var minTemp = "";
		for(var k in this.decreaseTerms[this.type]) { minTemp = k; break; }
		var minDate = this.getDateObject(minTemp);
		var maxDate = new Date();
		maxDate.setFullYear(maxDate.getFullYear() + 2);
		if( this.joinDate != null ){
			if( maxDate >= this.joinDate && minDate <= this.joinDate) {
				return true;
			}
		}
		return false;
	},
	getDateObject : function(date){
		if ( this.isValidDate(date) ) {
			return new Date(date.substring(0,4), parseInt( date.substring(4,6)) - 1, date.substring(6,8));
		} else {
			return null;
		}
	},
	isValidDate : function(date){
		date_num = parseInt(date);
		
		if ( !date_num ) return false;

		if ( date_num >= this.minDate && date_num <= this.maxDate ) {
			return true;
		} else {
			return false;
		}
	}

};
