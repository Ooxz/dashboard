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
.then(response => response.json())
.then(data => {
	console.log(data)
})
.catch(err => {
	console.log(err)
})
