var test=function(){
	console.log($("li"))
	var start=Date.now();
	for(var i=0;i<1000000;i++){
		$("#nav").$("li")
	}
	var end=Date.now();
	console.log(end-start)
	console.log(document.getElementById("nav").getElementsByTagName("li"))
	var start=Date.now();
	for(var i=0;i<1000000;i++){
		document.getElementById("nav").getElementsByTagName("li")
	}
	var end=Date.now();
	console.log(end-start)
}