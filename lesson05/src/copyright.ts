// let year:HTMLElement | null= document.getElementById("year")
// let thisYear : string
// thisYear=new Date().getFullYear().toString()

// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }


const year= document.getElementById("year") as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()

if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}
