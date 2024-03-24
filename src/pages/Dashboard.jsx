import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VisaStatistika from "../components/VisaStatistika";
import SukurtiApklausa from "../components/SukurtiApklausa";
import KazkasPapildomo1 from "../components/KazkasPapildomo1";
import ApklausuStatistika from "../components/ApklausuStatistika";
import KazkasPapildomo2 from "../components/KazkasPapildomo2";
import RoliuKeitimas from "../components/RoliuKeitimas";
import Apklausos from "../components/Apklausos";
import DashSidebar from "../components/DashSidebar";
import Namai from "../components/Namai";
import Forms from "../components/Forms"
import Header from "../components/Header";


const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="w-full">
      <Header />
        <div className="block w-screen md:hidden">
          
          <DashSidebar  />
        </div>
       
        <div>
       
        {tab === "namai" && <Namai />}
        {tab === "apklausos" && <Apklausos />}
        {tab === "sukurtiApklausa" && <SukurtiApklausa />}
        {tab === "apklausuStatistika" && <ApklausuStatistika />}
        {tab === "roliuKeitimas" && <RoliuKeitimas />}
        {tab === "visaStatistika" && <VisaStatistika />}
        {tab === "kazkasPapildomo1" && <KazkasPapildomo1 />}
        {tab === "kazkasPapildomo2" && <KazkasPapildomo2 />}
        {tab === "forms" && <Forms />}
        </div>
       
      </div>
      <div className="ms:w-56 hidden md:block">

        <DashSidebar  />
        
      </div>
      
  </div>

  );
};

export default Dashboard;
