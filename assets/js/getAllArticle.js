function myFunction() {
	$.get('./assets/article/archive.json', function (res) {
		res.data.forEach(element => {
			console.log(element)
			$("#post").append(`<article>
					<header>
						<span class="date">`+ element.date + `</span>
						<h2>`+ element.title + `</h2>
					</header>
					<p style="text-align:center">`+ element.intro + `</p>
					<ul class="actions special">
						<li><a href="`+ 'assets\\article\\' + element.url + `" class="button">Full Story</a></li>
					</ul>
				</article>`)
		});

	})

}