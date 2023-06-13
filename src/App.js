import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DetailsCard from "./components/DetailsCard";
import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/details" element={<DetailsCard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
