import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Series from "./pages/Series";
import Header from "./components/Header";
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState<boolean>(true);

  const handlerTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <Header setTheme={handlerTheme} theme={theme} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/inicio"} element={<Home />} />
        <Route path={"/series"} element={<Series />} />
        <Route path={"/comics"} element={<Comics />} />

        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
