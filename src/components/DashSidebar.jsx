import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import { HiUser } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaPlus,
  FaList,
  FaChartBar,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
import { FcSurvey } from "react-icons/fc";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const role = currentUser.data.role;

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar className="w-full contents md:w-56 md:pt-20">
      <Sidebar.Items className="w-full  ">
        <Sidebar.ItemGroup className="flex flex-col gap-1 mt-0 pt-1 items-start">
          <Sidebar.Collapse icon={RxHamburgerMenu} label="Perziurekite meniu">
            {currentUser && (
              <Link to="/dashboard?tab=apklausos">
                <Sidebar.Item
                  active={tab === "apklausos"}
                  icon={FaList}
                  labelColor="dark"
                  as="div"
                >
                  Apklausos
                </Sidebar.Item>
              </Link>
            )}
            {currentUser &&  (
              <Link to="/dashboard?tab=sukurtiApklausa">
                <Sidebar.Item
                  active={tab === "sukurtiApklausa"}
                  icon={FaPlus}
                  labelColor="dark"
                  as="div"
                >
                  Sukurti apklausa
                </Sidebar.Item>
              </Link>
            )}
            {currentUser &&  (
              <Link to="/dashboard?tab=apklausuStatistika">
                <Sidebar.Item
                  active={tab === "apklausuStatistika"}
                  icon={FaChartBar}
                  labelColor="dark"
                  as="div"
                >
                  Apklausu statistika
                </Sidebar.Item>
              </Link>
            )}
            {currentUser &&(
              <Link to="/dashboard?tab=forms">
                <Sidebar.Item
                  active={tab === "forms"}
                  icon={FcSurvey}
                  labelColor="dark"
                  as="div"
                >
                  Klausimynas
                </Sidebar.Item>
              </Link>
            )}
            {currentUser   &&(
              <Link to="/dashboard?tab=roliuKeitimas">
                <Sidebar.Item
                  active={tab === "roliuKeitimas"}
                  icon={HiUser}
                  labelColor="dark"
                  as="div"
                >
                  Rolių keitimas
                </Sidebar.Item>
              </Link>
            )}
            {currentUser   &&(
              <Link to="/dashboard?tab=visaStatistika">
                <Sidebar.Item
                  active={tab === "visaStatistika"}
                  icon={FaChartLine}
                  labelColor="dark"
                  as="div"
                >
                  Visa statistika
                </Sidebar.Item>
              </Link>
            )}
            {currentUser  && (
              <Link to="/dashboard?tab=kazkasPapildomo1">
                <Sidebar.Item
                  active={tab === "kazkasPapildomo1"}
                  icon={FaQuestion}
                  labelColor="dark"
                  as="div"
                >
                  Kazkas papildomo
                </Sidebar.Item>
              </Link>
            )}
            {currentUser  && (
              <Link to="/dashboard?tab=kazkasPapildomo2">
                <Sidebar.Item
                  active={tab === "kazkasPapildomo2"}
                  icon={FaQuestion}
                  labelColor="dark"
                  as="div"
                >
                  Kazkas papildomo
                </Sidebar.Item>
              </Link>
            )}
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;