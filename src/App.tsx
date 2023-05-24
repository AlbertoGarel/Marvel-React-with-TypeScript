import "semantic-ui-css/semantic.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Series from "./pages/Series";
import Header from './components/Header';

function App() {
  return (
    <div>
       <Header/>
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
