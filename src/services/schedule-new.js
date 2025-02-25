import {apiConfig} from "./apiConfig.js";

export async function scheduleNew({ id, name, when }) {
  try {

    await fetch(`${apiConfig.baseURL}/schedules`, {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento feito com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Erro ao tentar agendar");
  }
}