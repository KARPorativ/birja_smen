import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<MainPage></MainPage>} />
      </Route>
    </Routes>
  );
}

export default App;
