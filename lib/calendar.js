exports.Calendar = Calendar;

function Calendar(year,month,day){
	this.year = parseInt(year);
	this.month = parseInt(month) - 1;
	this.day = parseInt(day);
	this.init();
}
Calendar.prototype = {
	dateArray : [],
	setDefaultDate : function(year, month, day){
		this.year = parseInt(year);
		this.month = parseInt(month) - 1;
		this.day = parseInt(day);
	},
	getDateArray : function(){
		return this.dateArray;
	},
	init : function(){
		var thisDate = new Date(this.year, this.month, this.day);
		var preDate = new Date(this.year, this.month, 0);
		var nextDate = new Date(this.year, this.month + 1, 0);
		
		console.log(thisDate);

		var tempArray = [];
		var startIdx = (preDate.getDay() + 1) % 7;
		var endIdx = nextDate.getDate() + startIdx;
		var preEndDay = preDate.getDate();

		for ( var i = 0; i < 42 ; i++ ) {
			if( i < startIdx )
				tempArray.push( preEndDay - ( startIdx - i ) + 1 );
			else if( i > endIdx )
				tempArray.push( i - endIdx );
			else
				tempArray.push( i - startIdx + 1 );
		}
		console.log(tempArray);
	}
};
