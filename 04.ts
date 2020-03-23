let isLeap = year => new Date(year, 1, 29).getDate() === 29;
let findLeap = (startYear:number, endYear:number) => {
    for (let year:number = startYear; year <= endYear; year++) {
        if (isLeap(year)) {
            console.log(year)
        }
    }
}

findLeap(2000, 2020)
