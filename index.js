let list = []
let renderListHTML = ''

fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init')
	.then(response => response.json()
		.then(data => list = data.list)
		.then(
			renderList
		)
	);

renderList = () => {
	renderListHTML = list.map((item, index) => {
		return (`
		<div class="container">
			<div class="row">
				<div class="box1">

			<div>
				<a href=${item.url}><img src=${item.thumbnail[0].url} height=${item.thumbnail[0].height} width=${item.thumbnail[0].width} alt=${item.name} />
				<div class="box${index + 1} header" id=${index}>
					<a href=${item.url}>${item.name}</a><br>
					<a href=${item.url}>${item.branding}</a>
				</div>
			</div>
			
				</div>
			</div>
		</div>
`)
	})

	console.log('list ', list);
	loadHtml()
}


loadHtml = () => {
	document.getElementById('main').innerHTML = '<div>	<h1>Choice of text for header here ... </h1>' + renderListHTML + '</div>'
}