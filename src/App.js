import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
