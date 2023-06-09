import { HashRouter, Route, Routes } from "react-router-dom";
import Access from "./screens/Access";
import Root from "./screens/Root";
import Signin from "./screens/Signin";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import TermsPolicies from "./screens/TermsPolicies";
import Tickets from "./screens/Tickets";
import Flights from "./screens/Flights";
import Payment from "./screens/Payment";
import Manager from "./screens/Manager";
import AuthContext from "./context/AuthContext";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  
  const [userLogged, setUserLogged] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{userLogged, setUserLogged}}>
        <HashRouter>
          <Routes>
            <Route path="/access" element={<Access />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<TermsPolicies />} />
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/payment/:id" element={<Payment />} />
              <Route path="/manager" element={<Manager />} />
            </Route>
          </Routes>
        </HashRouter>
      </AuthContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
