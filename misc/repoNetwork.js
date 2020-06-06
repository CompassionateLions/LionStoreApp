function hide(selector) { $(selector).setAttribute('style','display:none')} 
function remove(selector) { $(selector).remove()} 
function remove_class(selector) { $(selector).setAttribute('class','')} 

function move_left(count)
{        
    var eventObj = document.createEvent("Events");
    eventObj.initEvent("keydown", true, true);
    eventObj.which = 37;  // left key
	for (i=0; i < count ; i++) {
    	document.dispatchEvent(eventObj);
    }
} 

function resize_canvas(width)
{
	document.getElementById("network").style="width:" + width; window.dispatchEvent(new Event("resize"))
}

remove('.pagehead')
remove('.js-header-wrapper')
remove('.menu')
remove('.Subhead')
remove('.info')
remove('.btn-link')
remove('.footer')
remove_class('.container-lg')

resize_canvas('4150px')
move_left(14)