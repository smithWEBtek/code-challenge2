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

	// let renderListHTML = list.map((item, index) => {
	// 		if (item.type === 'text') {

	// 		}
	// 		if (item.type === 'video') {

	// 		}
	// 		if (item.type === 'photo' && item.description) {

	// 		}
	// 		if (item.type === 'photo') {

	// 		}




	return (
		`
<div class="container">
	<div class="columns">
		<div class="column"><h1 class="title is-1">${item.name}</h1></div>
		<div class="column"><h1 class="title is-1">${item.branding}</h1></div>
	</div>
	<div class="columns">
		<div class="column">
			<img src=${item.thumbnail[0].url} height=${item.thumbnail[0].height} width=${item.thumbnail[0].width} alt=${item.name} />
		</div>
	</div>
	<div class="columns">
		<div class="column">
			<h4>${item.description}</h4>
		</div>
	</div>
</div> 
`
	)
})
loadHtml()
}

loadHtml = () => {
	document.getElementById('main').innerHTML = '<div>' + renderListHTML + '</div>'
}