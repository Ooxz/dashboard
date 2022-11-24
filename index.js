const cryptoTop = document.getElementById("crypto-top")
const localTime = document.getElementById("local-time")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(response => response.json())
.then(data => {
	console.log("https://images.unsplash.com/photo-1494280986787-c49b328829dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjkyMTMzMDU&ixlib=rb-4.0.3&q=80&w=1080")
	document.body.style.backgroundImage = `url(${data.urls.regular})`
	document.getElementById("author").innerHTML = `By: ${data.user.name}`
})
.catch(err => {
	console.log(err)
	document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1494280986787-c49b328829dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjkyMTMzMDU&ixlib=rb-4.0.3&q=80&w=1080")`
})


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(response => {
	if (!response.ok) {
		throw Error("Something went wrong")
	}return response.json()
})

.then(data => {
	cryptoTop.innerHTML = `
	<div class="coin-info">
	<img src=${data.image.small} alt="dogecoin icon">
	<span class="coin-icon">${data.name}</span>
	</div>
	<div class="prices">
	<p>🎯: € ${data.market_data.current_price.eur}</p>
	<p>👆: € ${data.market_data.high_24h.eur}</p>
	<p>👇: € ${data.market_data.low_24h.eur}</p>
	</div>
	`
})



.catch(err => {
	console.log(err)
})

function timer() {
	var date = new Date();
	const time = date.toLocaleTimeString("fr", {timeStyle: "short"});
	localTime.innerHTML = time
}

setInterval(timer, 1000);

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
.then(response => {
	if(!response.ok) {
		throw Error("Weather data not available")
	}
	return response.json()
})
.then(data => {
	const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	console.log(weatherIcon)
	document.getElementById("weather").innerHTML = `
	<div class="icon-temperature">
	<img class="weather-icon" src=${weatherIcon}>
	<div>${Math.round(data.main.temp)}°</div>
	</div>
	<p class="region-name">${data.name}</p>
	`
	console.log(data.weather)
	console.log(data.main.temp)
})
});

fetch("")
