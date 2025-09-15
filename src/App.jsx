import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import UserSyncHandler from "./components/UserSyncHandler";
import { Home } from "./pages/Home";
import Result from "./pages/result";

const App = () => {
  return(
    <div>
      <UserSyncHandler />
      <Menubar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={
          <>
            <SignedIn>
              <Result />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;