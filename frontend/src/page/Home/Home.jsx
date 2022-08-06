import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import '../../style/main.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Feature from '../../components/HomePage/Feature';
import About from '../../components/HomePage/About';
import aboutimage1 from '../../assets/Frame 19.png';
import aboutimage2 from '../../assets/download.png';
import Header from '../../components/HomePage/Header';
import { toast } from "react-toastify";
export default function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else toast(` Hello ${data.user}`, { theme: "dark" });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const loOut = () => {
    navigate("/register");
  }
 
  return (
    <>
     <div>
        <Navbar/>
        <Header/>
        <Feature/>
        <About image={aboutimage1} title='Comes Wit All You Nedd For Daily Life' button='Get The App'/>
    
    <About image={aboutimage2} title='Download And Get The App Now' button='Download'/>
        <Footer/>
    </div>
    </>
  );
}
