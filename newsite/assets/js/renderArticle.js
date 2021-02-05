function myFunction() {
  $.get('./assets/article/11.md', function (data) {
    console.log(data)
    document.title = data.title;//修改文档标题
    $("#id").html("<b>" + data.title + "</b>");
    document.getElementById('test').innerHTML =
      marked(data);
  })

}