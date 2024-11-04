import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules?date=${date}`)
        const data = await response.json()

        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when,"day"))
        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("nao foi possivel carregar os agendamentos")
    }
}