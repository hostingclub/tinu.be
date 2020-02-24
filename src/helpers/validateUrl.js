// URL validation
function validateUrl(str) {
    var expression = /^https:\/\/tinu\.be/gi &&  /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(str.substr(0,15) === window.location.href ) return false;

    return !!regex.test(str);
}

export default validateUrl;