import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import Transfer from "../../pages/Transfer";
import Replenishment from "../../pages/Replenishment";
import TransferWallet from "../../pages/Transfer_wallet";
import Profile from "../../pages/Profile";
import { History } from "../../pages/History";
import { routes } from "../../constantes/routes";
import { Navbar } from "../navbar/Navbar";
import "./App.css";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={routes.main} element={<Main />} />
          <Route path={routes.transfer} element={<Transfer />} />
          <Route path={routes.replenishment} element={<Replenishment />} />
          <Route path={routes.transferWallet} element={<TransferWallet />} />
          <Route path={routes.profile} element={<Profile />} />
          <Route path={routes.history} element={<History />} />
          <Route path={routes.main} element={<Main />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
