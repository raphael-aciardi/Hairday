import { hoursLoad } from "../form/hours-load.js"
const selectDate = document.getElementById("date")
export function schedulesDay() {
  const date = selectDate.value
  hoursLoad({date})
}