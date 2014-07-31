var UI={};
//basic selectors
var $=function(selector){
	var selectorSub=selector.slice(1);
	switch(selector[0]){
		//class selector
		case ".":
			return document.getElementsByClassName(selectorSub);
		break;
		//id selector
		case "#":
			return document.getElementById(selectorSub)
		break;
		//tag selector
		default:
			return document.getElementsByTagName(selectorSub)
		break;
	}
}
Element.prototype.$=$;