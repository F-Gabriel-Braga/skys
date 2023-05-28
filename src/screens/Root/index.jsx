import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Root() {
    
    const { userLogged } = useContext(AuthContext);
    if (!userLogged) {
      return <Navigate to="/access" />;
    }

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}