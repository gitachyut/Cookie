function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(name) {
    var user = getCookie(name);
    if (user != "") {
        alert("Welcome again "+user);
    } else {
        alert("Cookie not set");
    }
}
function deleteCookie(name) {
	setCookie(name,"",-1);
}
//setCookie('user_id', 'Achyut', 1);
deleteCookie('user_id');
checkCookie('user_id');  
