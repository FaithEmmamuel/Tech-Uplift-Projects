function getDayName(week) {
    let day;

    switch(week) {
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
        default:
            day = 'Invalid day';
    }

    return day;
}

console.log(getDayName(4));
console.log(getDayName(3));
console.log(getDayName(8));