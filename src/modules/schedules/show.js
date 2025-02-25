import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) { 
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const hour = dayjs(schedule.when).hour();

      
      const period =
        hour < 12 ? periodMorning :
        hour < 18 ? periodAfternoon :
        periodNight;

      
      const alreadyExists = Array.from(period.children).some(item =>
        item.querySelector("strong")?.textContent === dayjs(schedule.when).format("HH:mm")
      );

      if (alreadyExists) return; 

      // Criando elementos
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id); 
      const time = document.createElement("strong");
      const name = document.createElement("span");
      const cancelIcon = document.createElement("img");

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Ícone de cancelamento");

      item.append(time, name, cancelIcon);
      period.appendChild(item);
    });

  } catch (error) {
    console.error("Erro ao exibir os agendamentos:", error);
  }
}
