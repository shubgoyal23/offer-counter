const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const dateLimit = document.getElementById("end-date")
const countDown = document.querySelectorAll(".timmer h4")

const daysToAddToCurrentDate = 2
const currentDate = new Date()
const myyear = currentDate.getFullYear()
const mymonth = currentDate.getMonth()
const mydate = currentDate.getDate() + daysToAddToCurrentDate



const futureDate = new Date(myyear, mymonth, mydate , 12, 10, 0)


dateLimit.innerHTML = `Offer ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()} pm`

function calculateTimmerTime(){
    const timeArray = []
    const difference = futureDate - new Date()
    const days = Math.floor(difference / (24*60*60*1000))
    timeArray.push(days)
    const hours = Math.floor((difference % (24*60*60*1000)) / (60*60*1000))
    timeArray.push(hours)
    const mins = Math.floor((difference % (60*60*1000)) / (60*1000))
    timeArray.push(mins)
    const sec = Math.floor((difference % (60*1000)) / (1000))
    timeArray.push(sec)

    countDown.forEach((element, index) => {
        if(timeArray[index] < 10){
            element.innerHTML = `0${timeArray[index]}`
        }else{
            element.innerHTML = `${timeArray[index]}`
        }
    })
    if(difference <= 0){
        clearInterval(timeInterval)
        document.querySelector(".timer-div").innerHTML = `Sorry offer Ended`
    }
}


let timeInterval = setInterval(calculateTimmerTime, 1000)
calculateTimmerTime()



