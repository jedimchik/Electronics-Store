import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layoyt";
import { MainGalery } from "./components/MainGalery/MainGalery";
import { Checkout } from "./components/Checkout";
import { Summary } from "./components/Summary/Summary";
import "./app.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainGalery />} />
          <Route path="/*" element={<Checkout />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
