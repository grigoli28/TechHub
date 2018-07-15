let truncate = function(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + "...";
        return str;
    } else
        return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate(`Hi everyone!`, 20));