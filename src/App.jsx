import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Today from "./pages/Today";
import Habits from "./pages/Habits";

import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
