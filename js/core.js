function menu(){
	return load("indexS.html");
}

function load(dir) {
	var request;
	if (window.XMLHttpRequest) request = new XMLHttpRequest();
	request.open('GET', dir, false);
	request.send(null);
	return request.responseText;
}

function conversion(file){
	var pageMk= load("./markdown/"+file),
		converter = new showdown.Converter(),
		pageHTML= converter.makeHtml(pageMk);
	return pageHTML;
}

function plif(page){
	document.write(load("./accueil.html")+page);
}

function page(file){
	plif(conversion(file));
}
