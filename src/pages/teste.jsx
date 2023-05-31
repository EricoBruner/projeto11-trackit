import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Teste() {
  const userContext = useContext(UserContext);

  console.log(userContext.user);
  return <p>{}</p>;
}
