var weather = "https://json.ey.nz/weather.json";
var weatherDaily = [];
var weatherDay = [];
var weatherForecast = [];
var weatherTempMax = [];
var weatherTempMin = [];
window.onload = function (){
	wJSON();
}

function wJSON() {
	$.getJSON(weather, function (data) {
		$.each(data.features, function (i, w) {
			weatherDaily[i] = w.days.date;
			weatherDay[i] = w.days.dowTLA;
			weatherForecast[i] = w.days.forecastWord;
			weatherTempMax[i] = w.days.max;
			weatherTempMin[i] = w.days.min;
		i++;
		})
	});

	console.log("#1 daily");
	console.log(weatherDaily);
	console.log("#2 day");
	console.log(weatherDay);
	console.log("#3 forecast");
	console.log(weatherForecast);
	console.log("#4 max");
	console.log(weatherTempMax);
	console.log("#5 min");
	console.log(weatherTempMin);
}