import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import UserSyncHandler from "./components/UserSyncHandler";
import { Home } from "./pages/Home";

const App = () => {
  return(
    <div>
      <UserSyncHandler />
      <Menubar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;