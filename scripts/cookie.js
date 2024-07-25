if (navigator.cookieEnabled === false){
	alert("Cookies отключены");
}

function saveCookie(name, value) {
    document.cookie = `${name}=${value};path=/;SameSite=None;secure;max-age=31556926`;
    // console.log("Cookie сохранены")
    // console.log(document.cookie)
}

function getCookie(name) {
    let obj = {};
    let cookies = document.cookie.split(/;/);
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split(/=/);
        obj[cookie[0]] = cookie[i+1]; // +1 ?
    }

    return obj[name];
}

function deleteAllCookies() {
    let cookies = document.cookie.split(/;/);
    for (let i = 0, len = cookies.length; i < len; i++) {
        let cookie = cookies[i].split(/=/);
        document.cookie = cookie[0] + "=;max-age=-1";
    }

    console.log('Все cookie удалены');
}
// deleteAllCookies();
