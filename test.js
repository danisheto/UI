var test=function(){
	var start=Date.now();
	for(var i=0;i<10000000;i++){
		UI("#webpage");
	}
	var end=Date.now();
	console.log(end-start)
	var start=Date.now();
	for(var i=0;i<10000000;i++){
		document.getElementById("webpage");
	}
	var end=Date.now();
	console.log(end-start)
}