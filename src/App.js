import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ProfileCreate from "./pages/ProfileCreate";
import VeriFicationMailSend from "./pages/VeriFicationMailSend";
import Verify from "./pages/Verify";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Privateroutes from "./components/ProtectedRoutes";
import Openroutes from "./components/OpenRouter";


function App() {
  return (
     <div className="w-[100vw] min-h-[100vh]">
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Openroutes><Signup/></Openroutes>}/>
          <Route path="/profilecreate" element={<Privateroutes><ProfileCreate/></Privateroutes>}/>
          <Route path="/verifymail" element={<VeriFicationMailSend/>}/>
          <Route path="/verify/:id" element={<Verify/>}/>
          <Route path="/signin" element={<Openroutes><Signin/></Openroutes>}/>
          <Route path="/profile" element={<Privateroutes><Profile/></Privateroutes>}/>
       </Routes>
     </div>
  );
}

export default App;
