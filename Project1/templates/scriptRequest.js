/**
 * Created by Emilia on 12/11/2015.
 */
// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

var _app_id = "998ae819";
var _app_key = "026a650c4f12144495eeb71975688f5e";
/*
var xhr = new XMLHttpRequest();
var parameter="chicken";
xhr.open("GET", "https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?_app_id=998ae819&_app_key=026a650c4f12144495eeb71975688f5e&q="+parameter, false);
// Add your code below!
xhr.send();
window.alert(xhr.status);
*/
var parameter="chicken";
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync("")
xmlhttp.open("GET", url, true);
xmlhttp.send();
window.alert(xmlhttp.status);
