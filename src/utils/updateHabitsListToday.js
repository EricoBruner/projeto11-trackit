import { apiGetHabitsListToday } from "../services/api";

export default function updateHabitsListToday(token, dispatch) {
  apiGetHabitsListToday(token)
    .then((habitsListToday) => {
      dispatch({ type: "saveAllHabitsToday", data: habitsListToday });
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
