import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import Header from "../components/Header";

export default function Today() {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <>
      <Header />
      <h1>Today</h1>
    </>
  );
}
