import { apiConfig } from "./apiConfig.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",

    });

    console.log("Agendamento cancelado com sucesso.");
  } catch (error) {
    console.error("Erro ao tentar cancelar o agendamento:", error);
  }
}
