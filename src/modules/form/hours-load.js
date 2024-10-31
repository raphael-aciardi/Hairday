import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
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
    hours.appendChild(li)
  })
}