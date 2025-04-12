import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { FaUsers, FaUserTie, FaStar } from "react-icons/fa"; // FontAwesome Icons
import { AiOutlineLogout } from "react-icons/ai";
import { SiHomebridge } from "react-icons/si";
import loginToken from "../authComponents/LoginToken";
import { useDispatch, useSelector } from "react-redux";
import Applogo from "../../../public/AppLogo.png";
import admin from "../../../public/bilal.png";
import lawyer1 from "../../../public/Admin_avatar.avif";
import lawyer2 from "../../../public/Admin_avatar.avif";
import lawyer3 from "../../../public/Admin_avatar.avif";
import lawyer4 from "../../../public/Admin_avatar.avif";
import lawyer5 from "../../../public/Admin_avatar.avif";
import { getClientData } from "../../store/DataManagement";
import { getLawyerData } from "../../store/DataManagement";
import userType from "../authComponents/FindAdmin";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [activeTab, setActiveTab] = useState("clients");
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginToken || userType !== "admin") {
      navigate("/");
    }
  }, [loginToken, userType, navigate]);
  const ClienttData = useSelector((store) => store.DataSlice.clientData);
  const LawyerData = useSelector((store) => store.DataSlice.LawyerData);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getClientData());
    dispatch(getLawyerData());
  }, []);
  const handlHomeButton = () => {
    setActiveTab("home");
    navigate("/");
  };
  const lawyers = [
    {
      img: lawyer1,
      name: "John Doe",
      type: "Criminal Lawyer",
      rating: 4.8,
      fee: "$250/hr",
    },
    {
      img: lawyer2,
      name: "Jane Smith",
      type: "Family Lawyer",
      rating: 4.5,
      fee: "$200/hr",
    },
    {
      img: lawyer3,
      name: "Michael Brown",
      type: "Corporate Lawyer",
      rating: 4.7,
      fee: "$300/hr",
    },
    {
      img: lawyer4,
      name: "Emily Davis",
      type: "Divorce Lawyer",
      rating: 4.6,
      fee: "$180/hr",
    },
    {
      img: lawyer5,
      name: "Chris Wilson",
      type: "Immigration Lawyer",
      rating: 4.9,
      fee: "$220/hr",
    },
    {
      img: lawyer1,
      name: "John Doe",
      type: "Criminal Lawyer",
      rating: 4.8,
      fee: "$250/hr",
    },
    {
      img: lawyer2,
      name: "Jane Smith",
      type: "Family Lawyer",
      rating: 4.5,
      fee: "$200/hr",
    },
    {
      img: lawyer3,
      name: "Michael Brown",
      type: "Corporate Lawyer",
      rating: 4.7,
      fee: "$300/hr",
    },
    {
      img: lawyer4,
      name: "Emily Davis",
      type: "Divorce Lawyer",
      rating: 4.6,
      fee: "$180/hr",
    },
    {
      img: lawyer5,
      name: "Chris Wilson",
      type: "Immigration Lawyer",
      rating: 4.9,
      fee: "$220/hr",
    },
  ];

  const clients = [
    {
      name: "Alice Johnson",
      phone: "+1 123-456-7890",
      email: "alice@email.com",
    },
    { name: "Bob Williams", phone: "+1 987-654-3210", email: "bob@email.com" },
    {
      name: "Charlie Brown",
      phone: "+1 456-789-0123",
      email: "charlie@email.com",
    },
    {
      name: "Diana Roberts",
      phone: "+1 321-654-0987",
      email: "diana@email.com",
    },
    { name: "Ethan White", phone: "+1 654-321-7890", email: "ethan@email.com" },
    {
      name: "Alice Johnson",
      phone: "+1 123-456-7890",
      email: "alice@email.com",
    },
    { name: "Bob Williams", phone: "+1 987-654-3210", email: "bob@email.com" },
    {
      name: "Charlie Brown",
      phone: "+1 456-789-0123",
      email: "charlie@email.com",
    },
    {
      name: "Diana Roberts",
      phone: "+1 321-654-0987",
      email: "diana@email.com",
    },
    {
      name: "Alice Johnson",
      phone: "+1 123-456-7890",
      email: "alice@email.com",
    },
    { name: "Bob Williams", phone: "+1 987-654-3210", email: "bob@email.com" },
    {
      name: "Charlie Brown",
      phone: "+1 456-789-0123",
      email: "charlie@email.com",
    },
    {
      name: "Diana Roberts",
      phone: "+1 321-654-0987",
      email: "diana@email.com",
    },
  ];

  return (
    <>
      {loginToken && userType === "admin" && (
        <div className={styles.adminContainer}>
          {/* HEADER */}
          <header className={styles.headerContainer}>
            <div className={styles.leftContainer}>
              <img src={Applogo} alt="AppLogo" />
              <p>LegalProHub</p>
            </div>
            <div className={styles.adminProfile}>
              <img src={admin} alt="admin" />
              <div className={styles.adminDetails}>
                <p className={styles.adminName}>Muhammad Bilal</p>
                <p className={styles.adminRole}>Organization Admin</p>
              </div>
            </div>
          </header>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            <button
              className={`${styles.sidebarBtn} ${
                activeTab === "clients" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("clients")}
            >
              <FaUsers className={styles.icon} /> Clients
            </button>
            <button
              className={`${styles.sidebarBtn} ${
                activeTab === "lawyers" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("lawyers")}
            >
              <FaUserTie className={styles.icon} /> Lawyers
            </button>
            <button
              className={`${styles.sidebarBtn} ${
                activeTab === "logout" ? styles.active : ""
              }`}
              onClick={(() => setActiveTab("logout"), handleLogOut)}
            >
              <AiOutlineLogout className={styles.icon} /> LogOut
            </button>
            <button
              className={`${styles.sidebarBtn} ${
                activeTab === "home" ? styles.active : ""
              }`}
              onClick={handlHomeButton}
            >
              <SiHomebridge className={styles.icon} /> Home
            </button>
          </aside>

          {/* MAIN CONTENT */}
          <main className={styles.mainContent}>
            {activeTab === "clients" ? (
              <div className={styles.cardContainer}>
                {ClienttData && ClienttData.users ? (
                  ClienttData.users.map((client, index) => (
                    <div key={index} className={styles.clientCard}>
                      <h3>{`${client.firstName} ${client.lastName}`}</h3>
                      <p>
                        <strong>Phone:</strong> {client.mobile}
                      </p>
                      <p>
                        <strong>Email:</strong> {client.email}
                      </p>
                      {client.idFront && (
                        <div className={styles.documentImage}>
                          <p>
                            <strong>ID Front:</strong>
                          </p>
                          <img
                            src={client.idFront}
                            alt="ID Front"
                            className={styles.documentPhoto}
                          />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>Loading client data...</p>
                )}
              </div>
            ) : (
              <div className={styles.cardContainer}>
                {LawyerData && LawyerData.users ? (
                  LawyerData.users.map((lawyer, index) => (
                    <div key={index} className={styles.lawyerCard}>
                      <img src={lawyer.photo} alt={lawyer.name} />
                      <h3>{`${lawyer.firstName} ${lawyer.lastName}`}</h3>
                      <p>
                        <strong>Contact:</strong> {lawyer.mobile}
                      </p>
                      {/* <p className={styles.rating}>
                        <FaStar className={styles.starIcon} /> {lawyer.rating}
                      </p> */}
                      <p>
                        <strong>Email:</strong> {lawyer.email}
                      </p>
                      {lawyer.idFront && (
                        <div className={styles.idCard}>
                          <p>
                            <strong>License:</strong>
                          </p>
                          <img
                            src={lawyer.lawyerLicense}
                            alt="License"
                            className={styles.license}
                          />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>Loading Lawyer data...</p> // optional fallback message
                )}
              </div>
            )}
          </main>
        </div>
      )}
    </>
  );
};

export default Admin;
