exports.Period = Period;

function Period(){

}

Period.prototype = {
	minDate : 19000101,
	maxDate : 20601231,
	aDay : 1000*60*60*24,
	ovulationDay : null,
	thisPeriodDate : null,
	nextPeriodDate : null,
	startPregnancy : null,
	endPregnancy : null,
	periodCycle : null,
	setStartDate : function(date){
		this.thisPeriodDate = this.getDateObject(date);
	},
	setPeriodCycle : function(cycle){
		this.periodCycle = parseInt(cycle);
		this.setNextPeriodDate();
	},
	setPeriodCycleByBeforeDate : function(date){
		this.periodCycle = ( this.thisPeriodDate - this.getDateObject(date) ) / this.aDay; 
		this.setNextPeriodDate();
	},
	setNextPeriodDate : function(){
		var TERMS_BETWEEN_OVULATION_AND_NEXT_PERIOD = 14;
		
		this.nextPeriodDate = new Date( this.thisPeriodDate.getTime() + ( this.periodCycle * this.aDay ) );
		this.ovulationDay = new Date( this.nextPeriodDate.getTime() - ( TERMS_BETWEEN_OVULATION_AND_NEXT_PERIOD * this.aDay) );
		this.setPosiblePregnancy();
	},
	setPosiblePregnancy : function(){
		var TERMS_BETWEEN_START_PREGNANCY_AND_OVULATION = 4;
		var TERMS_BETWEEN_END_PREGNANCY_AND_OVULATION = 3;
		
		this.startPregnancy = new Date( this.ovulationDay.getTime() - ( TERMS_BETWEEN_START_PREGNANCY_AND_OVULATION * this.aDay) );
		this.endPregnancy = new Date( this.ovulationDay.getTime() + ( TERMS_BETWEEN_END_PREGNANCY_AND_OVULATION * this.aDay) );
	},
	getPeriodInfo : function(){
		return {
			"cycle" : this.periodCycle,
			"nextDate" : this.nextPeriodDate,
			"ovulationDay" : this.ovulationDay,
			"startPregnancy" : this.startPregnancy,
			"endPregnancy" : this.endPregnancy
		};
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
