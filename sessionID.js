function () {
    function writeCookie(name, value, minutes) {
        var date, expires;
        if (minutes) {
            date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    
    function readCookie(name, minutes) {
        var i, c, ca, nameEQ = name + "=";
        ca = document.cookie.split(';');
        for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                var value = c.substring(nameEQ.length, c.length);
                writeCookie(name, value, minutes);
                return value;
            }
        }
        return '';
    }
    
    var sId = readCookie('sessionId', 30);
    
    if (sId) {
        return sId;
    } else {
        sId = Date.now() + Math.floor((Math.random() * 10000000) + 1).toString();
        writeCookie('sessionId', sId, 30);
        return sId;
    }
    }
