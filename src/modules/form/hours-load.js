import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours.click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
  hours.innerHTML = ""
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    const isHoursPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return{
      hour,
      avaliable: isHoursPast
    }
  })
  opening.forEach(({hour, avaliable}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if (hour === "09:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.appendChild(li)

  })
  hoursClick()
}

function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.appendChild(header)
}