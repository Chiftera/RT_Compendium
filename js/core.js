function load(dir) {
	var request;
	if (window.XMLHttpRequest) request = new XMLHttpRequest();
	request.open('GET', dir, false);
	request.send(null);
	return request.responseText;
}

function conversion(file){
	var pageMk= load("./markdown/"+file+".md"),
		converter = new showdown.Converter(),
		pageHTML= converter.makeHtml(pageMk);
	return pageHTML;
}

function pouf(page){
	var doc = document.getElementById("page");
	doc.innerHTML = page;

}

function pageWrite(file){
	pouf(conversion(file));
}
