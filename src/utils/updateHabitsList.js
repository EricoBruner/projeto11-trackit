import { apiGetHabitsList } from "../services/api";

export default function updateHabitsList(token, dispatch) {
  apiGetHabitsList(token)
    .then((habitsList) => {
      dispatch({ type: "saveAllHabits", data: habitsList });
      return;
    })
    .catch((err) => {
      console.log(err);
      alert(`
        Erro: ${err.message} 
        Detalhes: ${err.details}
      `);
      return;
    });
}
