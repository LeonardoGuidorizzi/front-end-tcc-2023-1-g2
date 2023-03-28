import Home from "../templates/HomePage";
import LocalizeSe from "../templates/LocalizeSePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/MotoristasPage";

function Routes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home props={true} />} path="/" />
        <Route Component={LocalizeSe} path="/localize-se" />
        <Route element={<MotoristasPage props={true} />} path="/motoristas" />
      </Routes>
    </HashRouter>
  );
}

export default Routes;
