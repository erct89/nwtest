function Reloj(){
	var dateTime = {}
	var interval = 1000;
	var idInterval = null;

	var eDate = document.getElementsByClassName('date');
	var eTime = document.getElementsByClassName('time');

	var updateTime = function(){
		var d =  new Date();
		dateTime.time = {};
		//dateTime.time.hours = d.getHours();
		//dateTime.time.minutes = d.getMinutes();
		//dateTime.time.seconds = d.getSeconds();
		dateTime.time.hours = doubleDig(d.getHours()); //(d.getHours() < 10)? "0" + d.getHours(): d.getHours();
		dateTime.time.minutes = doubleDig(d.getMinutes()); //(d.getMinutes() < 10)? "0" + d.getMinutes(): d.getMinutes();
		dateTime.time.seconds = doubleDig(d.getSeconds()); //(d.getSeconds() < 10)? "0" + d.getSeconds(): d.getSeconds();
	}
	var updateDate = function(){
		var d = new Date();
		dateTime.date = {};
		//dateTime.date.day = d.getDate();
		//dateTime.date.month = d.getMonth();
		//dateTime.date.year = d.getFullYear();
		dateTime.date.day = doubleDig(d.getDate()); //(d.getDate() < 10)? "0" + d.getDate(): d.getDate();
		dateTime.date.month = doubleDig(d.getMonth()); //(d.getMonth() < 10)? "0" + d.getMonth(): d.getMonth();
		dateTime.date.year = doubleDig(d.getFullYear()); //(d.getFullYear() < 10)? "0" + d.getFullYear(): d.getFullYear();
		console.log(dateTime.date);
	}
	var printDate = function(){
		for(let index in eDate){
			eDate[index].innerHTML = "<p><span>" + dateTime.date.day + "</span>/<span>" + dateTime.date.month + "</span>/<span>" + dateTime.date.year + "</span</p>";
		}
	}
	var printTime = function(){
		for (let index in eTime) {
			eTime[index].innerHTML = "<p><span>" + dateTime.time.hours + "</span>:<span>" + dateTime.time.minutes + "</span>.<span>" + dateTime.time.seconds + "</span</p>";
		}
	}

	var doubleDig = function(number){
		return (number < 10 )? "0" + number: number;
	}

	this.startClock = function(paramInterval){
		interval = Number(paramInterval) === NaN ? 1000 : Number(paramInterval);
		if(!idInterval){
			idInterval = setInterval(function(){
				updateTime();
				printTime();
				if((dateTime.time.hours === 23 && dateTime.time.minutes === 59) || (dateTime.time.hours === 0 && dateTime.time.minutes === 1) || (dateTime.date === undefined)){
					updateDate();
					printDate()
				}
			}, interval);
		}else{
			console.info("First stop reloj");
		}
	}
	this.reloadClock = function(){
		clearInterval(idInterval);
		this.startClock();
	}

	this.stopClock = function(){
		clearInterval(idInterval);
	}

	this.getDate = function(){
		updateDate();
		return dateTime.date;
	}
	this.getTime = function(){
		updateTime();
		return dateTime.time;
	}
	this.getDateTime = function(){
		updateDate();
		updateTime();
		return dateTime;
	}
}