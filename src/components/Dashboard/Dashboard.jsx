import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import Dropdown from "../Dropdown/Dropdown";
import "./Dashboard.scss";

// const users = [
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "KMC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "DOC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MCOPS",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "SOC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "ICAS",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MIT",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "DANGER",
//     college: "KMC",
//   },
//   {
//     name: "John Doe",
//     regNo: 180905470,
//     contact: "9792972971",
//     vitals: "OKAY",
//     college: "MCODS",
//   },
// ];

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/usersdata", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result);
        setUsers(result.data);
        console.log(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //   console.log(users);
  const uniSvg = "/assets/svg/university.svg";
  const [selectedOption, setSelectedOption] = useState("ALL");
  const collegeOptions = [
    { id: 0, name: "ALL" },
    { id: 1, name: "MIT" },
    { id: 2, name: "KMC" },
    { id: 3, name: "MCOPS" },
    { id: 4, name: "MCODS" },
    { id: 5, name: "DOC" },
    { id: 6, name: "MIC" },
    { id: 7, name: "ICAS" },
    { id: 8, name: "SOC" },
  ];
  const handleCollegeChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='dashboard-container'>
      <div className='dashboard-heading'>
        <div className='dashboard-main-heading'>Dashboard</div>
        <div className='dashboard-sub-heading'>Monitor your campus</div>
      </div>
      <div className='dashboard-dropdown'>
        <Dropdown
          options={collegeOptions}
          onChange={handleCollegeChange}
          selectedValue={selectedOption}
          imgSrc={uniSvg}
        />
      </div>

      <div className='table'>
        <div className='table-headers'>
          <div>REG NO.</div>
          <div>NAME</div>
          <div>CONTACT</div>
          <div style={{ marginRight: "20px" }}>VITALS</div>
        </div>

        <div className='table-data'>
          {users.map(({ name, phone, isSafe, regNo }) => (
            <div className='table-row'>
              <div className='table-cell'>{regNo}</div>

              <div className='table-cell'>{name}</div>
              <div className='table-cell'>{phone}</div>
              <div
                className='table-cell'
                style={{
                  marginLeft: "20px",
                  color: isSafe === "DANGER" ? "#FF0000" : "#84DEAD",
                  fontWeight: "bold",
                }}>
                {isSafe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
