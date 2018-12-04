
let list = []
let renderListHTML = ''

fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init').then(response => response.json()
	.then(data => list = data.list)
	.then(
		renderList
	)
);


renderList = () => {

	debugger;

	renderListHTML = list.map((item, index) => {

		return (
			`<p id=${index}>
				<h2>${item.name}</h2><br>
				<img src=${item.thumbnail[0].url} height=${item.thumbnail[0].height} width=${item.thumbnail[0].width} alt=${item.name}/><br>
				<h4>${item.description}</h4>
				type: ${item.type}<br>
				name: ${item.name}<br>
				created: ${item.created}<br>
				branding: ${item.branding}<br>
				duration: ${item.duration}<br>
				categories: ${item.categories}<br>
				views: ${item.views}<br>
				pixels: ${item.pixels}<br>
				id: ${item.id}<br>
				origin: ${item.origin}<br>
				url: ${item.url}<br>
				</p>
			`
		)
	})
	loadHtml()
}

loadHtml = () => {
	document.getElementById('main').innerHTML = '<div>' + renderListHTML + '</div>'
}