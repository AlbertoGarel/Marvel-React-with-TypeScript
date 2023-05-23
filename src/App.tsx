import "semantic-ui-css/semantic.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Series from "./pages/Series";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/inicio"} element={<Home />}/>
        <Route path={"/series"} element={<Series />} />
        <Route path={"/comics"} element={<Comics />} />

        <Route path={'*'} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
