/**
 *  error and exception
 */

/*function UserException(message){
	this.message = message;
	this.name = "UserException";
}

function getMonthName(mo){
	mo = mo - 1;
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct", "Nov", "Dec"];

	if(months[mo] !== undefined){
		return months[mo];
	}else{
		throw new UserException("InvalidMonthNo");
	}
}

try{
	var myMonth = 15;
	var monthName = getMonthName(myMonth);
}catch(e){
	var monthName = 'unknown';
	console.log(e.message, e.name);
}*/

// 重新抛出异常
/*
try{
	throw n;
}catch(e){
	if(e <= 50){
		// handle
	}else{
		throw e;  // 无法处理，重新抛出
	}
}*/

