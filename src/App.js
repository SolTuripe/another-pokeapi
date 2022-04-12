import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Find from "./pages/Find/Find";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="find" element={<Find />} />
      </Route>
    </Routes>
  );
}

export default App;
