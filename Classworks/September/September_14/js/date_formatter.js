/* 
    exports.FuncName
*/


exports.formatDate = function (date, separator) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${day}${separator}${month + 1}${separator}${year}`;
}

exports.formatTime = function(time, separator) {
    let hour = time.getHours();
    let minutes = time.getMinutes();
    return `${hour}${separator}${minutes}`;
}