exports.Calculator = Calculator;

function Calculator(year,month,day){
	this.date = new Date(year,month-1,day);
}

Calculator.prototype = {
	minDate : 19000101,
	maxDate : 20601231,
	aDay : 1000*60*60*24,
	init : function(date){
		this.date = this.getDateObject(date);
	},
	setDate : function(year,month,day){
		this.date = new Date(year,month-1,day);
	},
	getDate : function(){
		return this.date;
	},
	stripHyphen : function(date){
		return date.replace(/-/g,'');
	},
	putHyphen : function(date){
		if ( this.isValidDate(date) ) {
			return date.substring(0,4) + '-' + date.substring(4,6) + '-' + date.substring(6,8);
		} else {
			return date;
		}
	},
	getTermsBetweenTwoDate : function(date){
		if ( !this.isValidDate(date) ){
			console.log("날짜를 모두 입력해 주세요");
			return false;
		}

		var terms = ( this.getDateObject( date ) - this.date ) / this.aDay;
		if( terms >= 0 ){
			terms = terms + 1;
		}
		return terms;
	},
	getTermsFromBirth : function(date){
		return Math.abs( this.getTermsBetweenTwoDate( date ) );
	},
	getDateByTerms : function(terms){
		terms = parseInt(terms);
		if( terms >= 0 ){
			terms = terms - 1;
		}

		return new Date( this.date.getTime() + ( terms * this.aDay ) );
	},
	getDateByDday : function(dDay){
		dDay = parseInt(dDay);

		return new Date( this.date.getTime() - ( dDay * this.aDay ) );
	},
	getKoreanAge : function(date){
		date = this.stripHyphen(date);
		date = this.getDateObject(date);
		var age = this.date.getFullYear() - date.getFullYear();

		date.setFullYear( this.date.getFullYear() );
		if ( date > this.date ) {
			age--;
		}
		return age;
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

