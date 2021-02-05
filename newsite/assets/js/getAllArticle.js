function myFunction() {
  $.get('./assets/article/archive.json', function (res) {
    res.data.forEach(element => {
      console.log(element)
      $("#post").prepend(`<article>
					<header>
						<span class="date">`+ element.date + `</span>
						<h2>`+ element.title + `</h2>
					</header>
					<p>`+ element.intro + `</p>
					<ul class="actions special">
						<li><a href="`+ element.url + `" class="button">Full Story</a></li>
					</ul>
				</article>`)
    });

  })

}