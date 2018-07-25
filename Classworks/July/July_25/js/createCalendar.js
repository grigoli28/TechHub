// new Date(year,month, 0).getDate(); => gives day count in month

function createCalendar(elem, year, month) {

    let date = new Date(year, month);
    let days = document.querySelectorAll('.day');
    
    for (let i = date.getDay(); i < days.length; i++) {
        days[i].textContent = `${date.getDate()}`;
        if (date.getDate() == 31) break;
        date.setDate(date.getDate() + 1);
    }
}

createCalendar(cal, 2018, 4);