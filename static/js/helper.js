
export const getLastDays = (params) => {
	var today = new Date();
	var now = today.getDate();
	var year = today.getYear();
	if (year < 2000) year += 1900; // Y2K fix
	var month = today.getMonth();
	var monarr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	// check for leap year
	if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monarr[1] = "29";
	return monarr[month]-now
}
