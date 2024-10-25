import dayjs from "dayjs"
const form = document.querySelector("form")

const selectDate = document.querySelector("#date")

const inputToday = dayjs().format("YYYY-MM-DD")

selectDate.value = inputToday

selectDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Form enviado!!!!!!!!!!!!!!")
}